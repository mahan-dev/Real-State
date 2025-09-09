import ProfileAddPage from "@/components/templates/ProfileAddPage";
import Profile from "@/models/Profile";
import connectDb from "@/utils/connectDb";
import React from "react";

interface EditPageProps {
  params: Promise<{ profileId: string }>;
}

const EditPage = async ({ params }: EditPageProps) => {
  await connectDb();
  const { profileId } = await params;

  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h2>مشکلی پیش آمده لطفا دوباره امتحان کنید</h2>;

  return (
    <>
      <ProfileAddPage data={JSON.parse(JSON.stringify(profile))} />
    </>
  );
};

export default EditPage;
