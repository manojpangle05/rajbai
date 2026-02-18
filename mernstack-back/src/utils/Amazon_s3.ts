import fs from 'fs';
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Optional: if you want, keep these for future
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

// If AWS is not configured, just return a dummy URL
export async function upload(file) {
    try {
        if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
            console.log('AWS not configured. Skipping upload, returning dummy URL.');
            return `/uploads/${file.originalname.replaceAll(" ", "")}`;
        }

        // Uncomment if you want real AWS upload later
        /*
        const s3Client = new S3Client({ region, credentials: { accessKeyId, secretAccessKey } });
        const fileContent = fs.readFileSync(file.path);
        const key = file.originalname.replaceAll(" ", "");
        const params = {
            Bucket: bucketName,
            Key: key,
            Body: fileContent,
        };
        const uploadCommand = new PutObjectCommand(params);
        await s3Client.send(uploadCommand);
        return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
        */
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        throw error;
    }
}
