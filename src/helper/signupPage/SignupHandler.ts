import axios from "axios";
import { AppRouterInstance } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

interface signupProps {
  email: string;
  password: string;
  rePassword: string;
  form: object;
  setForm: React.Dispatch<React.SetStateAction<object>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupValidation = async ({
  form,
  setForm,
  email,
  password,
  rePassword,
  setIsLoading
}: signupProps) => {
  if (!email || !password || !rePassword)
    return toast.error("فیلد هارا خالی نگذارید");
  if (password !== rePassword) return toast.error("رمز ها برابر نیست");

  setIsLoading(true)
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
    }
    setIsLoading(false)
  } catch (error) {
    const message = error?.response?.data.error || "مشکلی پیش آمده";
    toast.error(message);
    setIsLoading(false)
  }
};

export default SignupValidation;
