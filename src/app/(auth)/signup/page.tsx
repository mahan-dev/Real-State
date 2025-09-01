import React from "react";

import SignupPage from "@/components/templates/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Signup = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <SignupPage />;
};

export default Signup;
