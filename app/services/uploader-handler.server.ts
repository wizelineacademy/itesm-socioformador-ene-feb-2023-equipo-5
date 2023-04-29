import type { UploadHandler } from '@remix-run/node';
import type { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { s3Client } from './s3.sever';
import { PutObjectCommand } from '@aws-sdk/client-s3';
//import { GetObjectCommand } from '@aws-sdk/client-s3';
//import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const uploadStreamToS3 = async (data: AsyncIterable<Uint8Array>, key: string, contentType: string) => {
    const BUCKET_NAME = "smartspeak_data";

    const params: PutObjectCommandInput = {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: await convertToBuffer(data),
        ContentType: contentType,
    };

    await s3Client.send(new PutObjectCommand(params));

    /*
    let url = await getSignedUrl(s3Client, new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    }), { expiresIn: 15 * 60 });

    console.log(url);
    */

    return key;
}

// The UploadHandler gives us an AsyncIterable<Uint8Array>, so we need to convert that to something the aws-sdk can use. 
// Here, we are going to convert that to a buffer to be consumed by the aws-sdk.
async function convertToBuffer(a: AsyncIterable<Uint8Array>) {
    const result = [];
    for await (const chunk of a) {
        result.push(chunk);
    }
    return Buffer.concat(result);
}

export const s3UploaderHandler: UploadHandler = async ({ filename, data, contentType }) => {
    return await uploadStreamToS3(data, filename!, contentType);
}