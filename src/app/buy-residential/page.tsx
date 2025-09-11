import BuyResidentialPage from "@/components/templates/BuyResidential";
import { profileHandler } from "@/helper/buyResidential/profileHandler";
import connectDb from "@/utils/connectDb";
import React from "react";

const BuyResidential = async ({ searchParams }) => {
  const searchQuery = searchParams;

  await connectDb();
  const res = await profileHandler();

  let finalData = res;
  if (searchQuery.category) {
    finalData = finalData.filter(
      (item) => item.category === searchQuery.category
    );
  }

  if (res) return <BuyResidentialPage data={finalData} />;
  else if (!res) return <h2>مشکلی پیش آمده</h2>;
};

export default BuyResidential;
