
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';

console.log(process.env.CLOUD_NAME, process.env.API_KEY, process.env.API_SECRET);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


export const uploadImage = async (filePath: string) => {
    const upload = await cloudinary.uploader.upload(filePath) as UploadApiResponse
    return { url: upload.secure_url, asset_id: upload.asset_id, public_id: upload.public_id }
};
export const deleteImage = async (public_id: string) => {
    const deleted = await cloudinary.uploader.destroy(public_id)
    return { url: deleted.secure_url, asset_id: deleted.asset_id, public_id: deleted.public_id }
};



