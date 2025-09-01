"use client";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import React, { JSX } from "react";
import { Toaster } from "react-hot-toast";

type ChildrenProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <Toaster />
    </SessionProvider>
  );
};

export default Providers;
