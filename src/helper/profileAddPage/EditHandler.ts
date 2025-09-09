import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  FormValues,
  ProfileResponse,
} from "@/components/templates/interface/Interface";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface EditProps {
  formData: FormValues;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: AppRouterInstance;
}

export const EditHandler = async ({
  formData,
  setLoading,
  router,
}: EditProps) => {
  try {
    setLoading(true);
    const res = await axios.patch<ProfileResponse>("/api/profile", formData);
    if (res.data?.message) {
      toast.success(res.data.message, { duration: 2000 });
      await new Promise((resolver) => setTimeout(resolver, 2000));
      router.push("/dashboard/my-profiles");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
