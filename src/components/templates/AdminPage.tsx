import { ProfileTypes } from "@/models/interface/ProfileTypes";
import React from "react";
import AdminCard from "@/modules/AdminCard";

interface AdminProps {
  profile: ProfileTypes[];
}

const AdminPage = ({ profile }: AdminProps) => {
  return (
    <div>
      {!profile.length && (
        <h2 className="text-center text-red-500 bg-red-200 rounded-md  mt-4 py-1"> هیچ آگهی در انتظار تایید نیست</h2>
      )}

      {profile.map((item) => (
        <AdminCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default AdminPage;
