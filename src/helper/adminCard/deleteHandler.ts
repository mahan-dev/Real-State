import { ProfileResponse } from "@/components/templates/interface/Interface";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";


interface AdminProps {
    _id: string;
    router: AppRouterInstance
}

export const AdminDelete = async ({_id, router}:AdminProps) => {
  try {
    const res = await axios.delete<ProfileResponse>(`/api/admin/remove/${_id}`);
    console.log(res);
    if (res.status === 200) {
      toast.success(res.data.message, { duration: 2000 });
      router.refresh();
    }
  } catch (error) {
    console.log("something went wrong", error);
  }
};
