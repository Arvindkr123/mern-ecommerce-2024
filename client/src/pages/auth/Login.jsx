import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  //console.log(formData);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      console.log(data.payload);
      if (data.payload.success) {
        toast.success(data.payload.message);
        navigate("/shop/home");
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
          Sign in to your Account
        </h1>
        <p className="mt-2">
          Do not have an account{" "}
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      {/* form tags goes  */}
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
export default AuthLogin;
