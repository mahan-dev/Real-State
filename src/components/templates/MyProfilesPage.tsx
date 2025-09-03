import { UserProfilesProps } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import React from "react";
import DashboardCard from "@/components/modules/DashboardCard";

export interface Profile {
  profileData: UserProfilesProps;
}

const MyProfilesPage = ({ profileData }: Profile) => {
  const userProfile = profileData.profiles;
  console.log(userProfile);

  return (
    <div>
      {userProfile.length > 0 ? "" : <p>آگهی پیدا نشده است</p>}

      {userProfile.map((item) => (
        <DashboardCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default MyProfilesPage;
