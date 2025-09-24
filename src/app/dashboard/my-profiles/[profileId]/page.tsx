import React from "react";
import connectDb from "@/utils/connectDb";
import Profile from "@/models/Profile";

import ProfileAddPage from "@/components/templates/ProfileAddPage";
import mongoose from "mongoose";

interface EditPageProps {
  params: Promise<{ profileId: number }>;
}

const EditPage = async ({ params }: EditPageProps) => {
  await connectDb();
  const { profileId } = await params;

  if(!mongoose.Types.ObjectId.isValid(profileId)) return;

  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h2>مشکلی پیش آمده لطفا دوباره امتحان کنید</h2>;

  return (
    <>
      <ProfileAddPage data={JSON.parse(JSON.stringify(profile))} />
    </>
  );
};

export default EditPage;
