import BuyResidentialPage from "@/components/templates/BuyResidential";
import { profileHandler } from "@/helper/buyResidential/profileHandler";
import connectDb from "@/utils/connectDb";
import React from "react";

interface BuyResidentialProps {
  searchParams: Promise<{ category: string }> ;
}

const BuyResidential = async ({ searchParams }: BuyResidentialProps) => {
  const { category } = await searchParams;

  await connectDb();
  const res = await profileHandler();

  let finalData = res;

  if (category) {
    finalData = finalData.filter((item) => item.category === category);
  }

  if (res)
    return <BuyResidentialPage data={JSON.parse(JSON.stringify(finalData))} />;
  else if (!res) return <h2>مشکلی پیش آمده</h2>;
};

export default BuyResidential;
