import React from "react";

import connectDb from "@/utils/connectDb";
import { authOptions } from "@/helper/authOptions/route";
import { getServerSession } from "next-auth";

import MyProfilesPage from "@/components/templates/MyProfilesPage";
import { userProfiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";

const route = async () => {
  await connectDb();

  const session = await getServerSession(authOptions);
  const [userProfile] = await userProfiles(session);

  return <MyProfilesPage profileData={userProfile} />;
};

export default route;
