import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import connectDb from "@/utils/connectDb";
import User from "@/models/User";
import Profile from "@/models/Profile";

import DashboardSideBar from "@/components/layout/DashboardSideBar";
import AdminPage from "@/components/templates/AdminPage";
import { authOptions } from "@/helper/authOptions/route";

export const metadata: Metadata = {
  title: "پنل ادمبن | پروژه املاک",
  description: "Sell buildings",
  icons: { icon: "./favicon.ico" },
};

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
