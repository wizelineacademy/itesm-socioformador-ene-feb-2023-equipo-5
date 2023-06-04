export async function getCredentials() {
    const s3ClientVideo = {
        region: process.env.S3_REGION,
        credentials: {
            accessKeyId: process.env.S3_KEY!,
            secretAccessKey: process.env.S3_SECRET!
        }
    }
    return s3ClientVideo
}