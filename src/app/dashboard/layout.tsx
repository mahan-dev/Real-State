import DashboardSideBar from "@/components/layout/DashboardSideBar";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");

  return <DashboardSideBar>{children}</DashboardSideBar>;
};

export default DashboardLayout;
