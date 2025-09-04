import axios from "axios";
import {
  FormValues,
  ProfileResponse,
} from "@/components/templates/interface/Interface";
import toast from "react-hot-toast";
import React, { SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";

interface AddInterface {
  setError: React.Dispatch<SetStateAction<boolean>>;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  reset: UseFormReset<FormValues>;
}

const notificationTimeout = async () =>
  await new Promise((resolver) => setTimeout(resolver, 2000));

export const AddHandler = async (
  formData: FormValues,
  { setError, reset, setLoading }: AddInterface
) => {
  console.log('👏 ~ AddHandler.ts:20 -> FormValues: ', formData);
  
  const phoneNumber = +formData.phone;
  const price = +formData.price;

  if (isNaN(phoneNumber)) {
    toast.error(" شماره تماس باید عدد باشد", { duration: 1500 });
    return;
  } else if (isNaN(price)) {
    toast.error("قیمت باید عدد باشد");
    return;
  }

  try {
    setLoading(true);
    const { data } = await axios.post<ProfileResponse>(
      "/api/profile",
      formData
    );
    if (data.message) {
      toast.success(data.message);
      await notificationTimeout();
      reset();
    }
  } catch (error) {
    const errorMessage = error.response.data.error;
    toast.error(errorMessage || "مشکلی در سمت سرور رخ داده است", {
      duration: 1500,
    });
    setError(true);
    return error;
  } finally {
    setLoading(false);
  }
};
