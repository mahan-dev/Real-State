import BuyResidentialPage from "@/components/templates/BuyResidential";
import { profileHandler } from "@/helper/buyResidential/profileHandler";
import connectDb from "@/utils/connectDb";
import React from "react";

const BuyResidential = async () => {
  await connectDb();

  const res = await profileHandler();
  if (res) return <BuyResidentialPage data={res} />;
  else if (!res) return <h2>مشکلی پیش آمده</h2>;
};

export default BuyResidential;
