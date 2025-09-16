import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSideBar from "@/components/layout/DashboardSideBar";
import AdminPage from "@/components/templates/AdminPage";
import Profile from "@/models/Profile";

const Admin = async () => {
  await connectDb();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profile = await Profile.find({ published: false });

  return (
    <DashboardSideBar role={user.role} email={user.email}>
      <AdminPage profile={JSON.parse(JSON.stringify(profile))} />
    </DashboardSideBar>
  );
};

export default Admin;
