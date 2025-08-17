import type { Metadata } from "next";
import "@/app/globals.css";

import { myFont } from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Real-State",
  description: "Sell buildings",
};

type LayoutProps = Readonly<PropsWithChildren>
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <section className="max-w-[1200px] m-auto py-5">
          <Layout>{children}</Layout>
        </section>
      </body>
    </html>
  );
}
