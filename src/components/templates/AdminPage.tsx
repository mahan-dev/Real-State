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
        <h2 className="text-center mt-4"> هیچ آگهی در انتظار تایید نیست</h2>
      )}

      {profile.map((item) => (
        <AdminCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default AdminPage;
