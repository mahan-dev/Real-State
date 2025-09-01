import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

interface signupProps {
  email: string;
  password: string;
  rePassword: string;
  form: object;
  setForm: React.Dispatch<React.SetStateAction<object>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupValidation = async ({
  form,
  setForm,
  email,
  password,
  rePassword,
  setIsLoading,
}: signupProps) => {
  if (!email || !password || !rePassword) {
    toast.error("فیلد هارا خالی نگذارید", { duration: 1500});
    return;
  }
  if (password !== rePassword) {
    toast.error("رمز ها برابر نیست");
    return;
  }

  setIsLoading(true);
  try {
    const res = await axios.post<FormData>("api/signup", form);
    const data = res.data;
    if (res.status === 201) {
      toast.success("حساب کاربری ایجاد شد");
      await new Promise((resolver) => setTimeout(resolver, 2000));
      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
      return true;
    }
    setIsLoading(false);
  } catch (error) {
    const message = error?.response?.data.error || "مشکلی پیش آمده";
    toast.error(message);
    setIsLoading(false);
    return false;
  }
};

export default SignupValidation;
