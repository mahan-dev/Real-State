import React from "react";

import SigninPage from "@/components/templates/SigninPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import connectDb from "@/utils/connectDb";

const Signin = async () => {
  let errorDb: string = "";
  try {
    await connectDb();
  } catch {
    errorDb = "مشکلی رخ داده است";
  }
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <SigninPage error={errorDb} />;
};

export default Signin;
