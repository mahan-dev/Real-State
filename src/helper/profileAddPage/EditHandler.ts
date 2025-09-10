import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { FormValues } from "@/components/templates/interface/Interface";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface EditProps {
  formData: FormValues;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: AppRouterInstance;
}

interface ResponseProps {
  message: string;
  error: string;
  data: object;
}

export const EditHandler = async ({
  formData,
  setLoading,
  router,
}: EditProps) => {
  try {
    setLoading(true);
    const res = await axios.patch<ResponseProps>("/api/profilez", formData);

    const success = res.status === 200;
    if (success) {
      toast.success(res.data.message, { duration: 2000 });
      await new Promise((resolver) => setTimeout(resolver, 2000));
      router.push("/dashboard/my-profiles");
    }
  } catch (error) {
    console.log(error);
    const { data } = error?.response;
    const message = data.error || "مشکلی رخ داده است"
    toast.error(message, { duration: 2000 });
  } finally {
    setLoading(false);
  }
};
