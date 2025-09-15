import React, { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import DashboardSideBar from "@/components/layout/DashboardSideBar";
import User from "@/models/User";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");

  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش آمده است</h3>;

  return (
    <DashboardSideBar role={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};

export default DashboardLayout;
