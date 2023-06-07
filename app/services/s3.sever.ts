import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({
    endpoint: process.env.S3_ENDPOINT,
    region: 'us-east-2',
    forcePathStyle: true,
    credentials: {
        accessKeyId: process.env.S3_KEY!,
        secretAccessKey: process.env.S3_SECRET!
    }
});

export { s3Client };