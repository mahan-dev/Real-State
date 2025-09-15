import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSideBar from "@/components/layout/DashboardSideBar";

const Admin = async () => {
  await connectDb();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  return (
    <DashboardSideBar role={user.role} email={user.email}>
      تست
    </DashboardSideBar>
  );
};

export default Admin;
