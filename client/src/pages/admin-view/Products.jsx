import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useState } from "react";
import ProductImageUpload from "./image-upload";

const initialFormData = {
  image: "",
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

const Products = () => {
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  console.log("formData", formData);
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="mb-5 flex w-full justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductDialog}
        onOpenChange={() => setOpenCreateProductDialog(false)}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>Add New Product</SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            imageUploadLoading={imageUploadLoading}
            setImageUploadLoading={setImageUploadLoading}
          />
          <div className="py-6">
            <CommonForm
              formControls={addProductFormElements}
              buttonText={"add Product"}
              onSubmit={onSubmitHandler}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};
export default Products;
