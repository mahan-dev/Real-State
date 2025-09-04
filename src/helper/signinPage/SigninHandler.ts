import { signIn } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

interface signInProps {
  email: string;
  password: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type ErrorMessage = string | null;

const signinValidation = async ({
  email,
  password,
  setIsLoading,
}: signInProps) => {
  if (!email || !password) {
    toast.error("فیلد هارا خالی نگذارید", { duration: 1500 });
    return;
  }

  setIsLoading(true);
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (res.status === 200) {
    toast.success("با موفقیت وارد شدید");
    setIsLoading(false);
    return true;
  }
  if (res.error) {
    const errorMessage: ErrorMessage = res.error.includes("buffering timed out")
      ? "مشکلی رخ داده است"
      : null;
    console.log(errorMessage);
    toast.error(errorMessage ?? res.error);
    setIsLoading(false);
    return false;
  }
};
export default signinValidation;
