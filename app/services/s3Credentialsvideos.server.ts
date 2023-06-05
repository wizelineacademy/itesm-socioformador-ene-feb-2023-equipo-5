export async function getCredentials() {
    const s3ClientVideo = {
        region: 'us-east-2',
        credentials: {
            accessKeyId: process.env.S3_KEY!,
            secretAccessKey: process.env.S3_SECRET!
        }
    }
    return s3ClientVideo
}