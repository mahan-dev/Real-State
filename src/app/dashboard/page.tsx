import { getServerSession } from "next-auth";


import connectDb from "@/utils/connectDb";
import User from "@/models/User";

import DashboardPage from "@/components/templates/DashboardPage";
import { authOptions } from "@/helper/authOptions/route";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const email = session?.user.email;

  let user: {
    createdAt: string;
  };
  try {
    user = await User.findOne({ email });
  } catch {
    console.log("error");
  }

  const createdAt = user?.createdAt;

  return <DashboardPage createdAt={createdAt} />;
};

export default page;
