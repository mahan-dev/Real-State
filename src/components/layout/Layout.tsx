import React, { JSX } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
interface childrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: childrenProps): JSX.Element => {
  return (
    <>
      <Header />
      <section className="min-h-[850px]">{children}</section>

      <Footer />
    </>
  );
};

export default Layout;
