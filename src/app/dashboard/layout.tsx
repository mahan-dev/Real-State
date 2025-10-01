import React, { PropsWithChildren } from "react";
import { Metadata } from "next";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import DashboardSideBar from "@/components/layout/DashboardSideBar";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { authOptions } from "@/helper/authOptions/route";

export const metadata: Metadata = {
  title: " پنل کاربری  | پروژه املاک ",
  description: "Sell buildings",
  icons: { icon: "./favicon.ico" },
};

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");

  await connectDb();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3 className="bg-rose-200 text-red-600 rounded-md mt-4 text-center p-2" >مشکلی پیش آمده است</h3>;

  return (
    <DashboardSideBar role={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};

export default DashboardLayout;
