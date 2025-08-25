import React from "react";

import SignupPage from "@/components/templates/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Signup = async() => {

  const session = await getServerSession()
  if(session) redirect("/dashboard")
  return <SignupPage />;
};

export default Signup;
