import { getServerSession } from "next-auth";

import connectDb from "@/utils/connectDb";
import User from "@/models/User";

import DashboardPage from "@/components/templates/DashboardPage";
import { authOptions } from "@/helper/authOptions/route";
import { userProfiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import { redirect } from "next/navigation";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  if(!session) redirect("/signin")
  const [profileLength] = await userProfiles(session);
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

  return (
    <DashboardPage
      createdAt={JSON.parse(JSON.stringify(createdAt))}
      profileLength={JSON.parse(JSON.stringify(profileLength.profiles.length))}
    />
  );
};

export default page;
