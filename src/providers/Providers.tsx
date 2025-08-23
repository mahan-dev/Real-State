"use client";
import { SessionProvider } from "next-auth/react";
import React, { JSX } from "react";
import { Toaster } from "react-hot-toast";

type ChildrenProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
};

export default Providers;
