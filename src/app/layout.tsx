import type { Metadata } from "next";
import "@/app/globals.css";

import { myFont } from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import React, { PropsWithChildren } from "react";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "پروژه املاک",
  description: "Sell buildings",
  icons: {icon:"./favicon.ico"}
};

type LayoutProps = Readonly<PropsWithChildren>;
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <section className="max-w-[1200px] mx-auto  py-3 max-xl:px-3">
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </section>
      </body>
    </html>
  );
}
