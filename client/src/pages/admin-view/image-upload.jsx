/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const BASE_URL_BACKEND = import.meta.env.VITE_BASE_URL_BACKEND;

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  setUploadedImageUrl,
  setImageUploadLoading,
}) => {
  const inputRef = useRef(null);
  //console.log(uploadedImageUrl);

  const handleImageFileChange = (event) => {
    const seletedFile = event.target.files[0];
    //console.log(seletedFile);
    setImageFile(seletedFile);
  };

  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDrop(event) {
    event.preventDefault();
    //console.log(event.dataTransfer.files[0]);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setImageFile(droppedFile);
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  async function uploadImageToCloudinary(imageFile) {
    try {
      //console.log("Image file: ", imageFile);
      const data = new FormData();
      data.append("my-file", imageFile); // Ensure 'my-file' matches the expected field name in Multer
      setImageUploadLoading(true);
      const response = await axios.post(
        `${BASE_URL_BACKEND}/api/v1/admin/products/upload-image`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //console.log("Response: ", response);

      // Correct the condition to check response status
      if (response && response.status === 200) {
        // Assuming the URL is in response.data.url
        setUploadedImageUrl(response.data.url);
        setImageUploadLoading(false);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      //console.error("Error uploading image:", error);
    }
  }

  useEffect(() => {
    if (imageFile !== null) {
      uploadImageToCloudinary(imageFile);
    }
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2  block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <Input
          type="file"
          id="image-upload"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{imageFile?.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductImageUpload;
