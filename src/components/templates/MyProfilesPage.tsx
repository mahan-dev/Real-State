import { UserProfilesProps } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import React from "react";
import DashboardCard from "@/components/modules/DashboardCard";
import styles from "@/templates/styles/myProfilePage/route.module.css";

export interface Profile {
  profileData: UserProfilesProps;
}

const MyProfilesPage = ({ profileData }: Profile) => {
  const userProfile = profileData?.profiles;
  console.log(userProfile);

  return (
    <>
      {userProfile?.length > 0 ? "" : <p>آگهی پیدا نشده است</p>}

      <div className={styles.container}>
        {userProfile?.map((item) => (
          <DashboardCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default MyProfilesPage;
