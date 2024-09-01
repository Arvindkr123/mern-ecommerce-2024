import { handleImageUpload } from "../../helpers/cloudinary.js";

export const handleImageUploadController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    console.log("Received file: ", req.file);

    // Convert the file buffer to a base64 string
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataUrl = `data:${req.file.mimetype};base64,${b64}`; // Correct format for Cloudinary

    console.log("Data URL: ", dataUrl);

    // Upload the image using Cloudinary helper function
    const result = await handleImageUpload(dataUrl);

    // Check if the upload was successful
    if (!result || !result.secure_url) {
      throw new Error("Cloudinary upload failed.");
    }

    // Send a successful response with the result
    res.json({
      success: true,
      url: result.secure_url, // Assuming 'secure_url' contains the uploaded image URL
    });
  } catch (error) {
    console.error("Error during image upload:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while uploading the image.",
      error: error.message,
    });
  }
};
