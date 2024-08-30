import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  //console.log(formData);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      console.log(data.payload);
      if (data.payload.success) {
        toast.success(data.payload.message);
        navigate("/auth/login");
      } else {
        toast.error(data.payload.message);
      }
    });
  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      {/* Form header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new Account
        </h1>
        <p className="mt-2">
          Already have an account{" "}
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      {/* form tags goes  */}
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Signup"}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
export default AuthRegister;
