import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

interface DeleteProps {
  id: string;
  router: AppRouterInstance;
}
interface Response {
  status: string;
  message: string;
}

export const DeleteHandler = async ({ id, router }: DeleteProps) => {
  try {
    const res = await axios.delete<Response>(`/api/profile/delete/${id}`);
    const status = res.status === 200;
    if (status) {
      const message = res.data.message;
      toast.success(message, { duration: 1000 });
      await new Promise((resolver) => setTimeout(resolver, 1000));
      router.refresh();
    }
  } catch {
    toast.error("مشکلی رخ داده است", { duration: 2000 });
  }
};
