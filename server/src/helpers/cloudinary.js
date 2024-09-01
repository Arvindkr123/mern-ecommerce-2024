import v2 from "cloudinary";
import multer from "multer";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "../config/envVar.config.js";

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
export const upload = multer({ storage }).single("my-file"); // Field name must match

export async function handleImageUpload(file) {
  // console.log(file);
  const result = await v2.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
