import React from "react";

import SigninPage from "@/components/templates/SigninPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect ("/dashboard")
  return <SigninPage />;
};

export default Signin;
