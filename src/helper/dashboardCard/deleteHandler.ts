import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import toast from "react-hot-toast";

interface DeleteProps {
  id: string;
  router: AppRouterInstance;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Response {
  status: string;
  message: string;
  error: string;
}

export const DeleteHandler = async ({
  id,
  router,
  setLoading,
}: DeleteProps) => {
  try {
    setLoading(true);
    const res = await axios.delete<Response>(`/api/profile/delete/${id}`);
    const status = res.status === 200;
    if (status) {
      const message = res.data.message;
      toast.success(message, { duration: 1000 });
      router.refresh();
    }

    const error = res.data.error;
    if (error) {
      toast.error(error, { duration: 2000 });
    }
  } catch {
    toast.error("مشکلی رخ داده است", { duration: 2000 });
  } finally {
    setLoading(false);
  }
};
