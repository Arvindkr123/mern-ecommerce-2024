import { Router } from "express";
import { upload } from "../../helpers/cloudinary.js";
import { handleImageUploadController } from "../../controllers/admin/products.controllers.js";

const router = Router();

router.post("/upload-image", upload, handleImageUploadController);

export default router;
