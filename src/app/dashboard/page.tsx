import DashboardPage from "@/components/templates/DashboardPage";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";

const page = async () => {

  await connectDb()
  const session = await getServerSession(authOptions);
  const email = session?.user.email;

  let user: {
    createdAt: string;
  };
  try {
     user = await User.findOne({ email }) ;
  } catch {
    console.log("error");
  }

  const createdAt = user?.createdAt;

  return <DashboardPage createdAt={createdAt} />;
};

export default page;
