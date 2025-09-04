import React from "react";

import SignupPage from "@/components/templates/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDb from "@/utils/connectDb";

const Signup = async () => {
  let error: string = "";
  try {
    await connectDb();
  } catch {
    error = "مشکلی رخ داده است"
  }
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <SignupPage error={error} />;
};

export default Signup;
