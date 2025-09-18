import DetailsPage from "@/components/templates/DetailsPage";
import Profile from "@/models/Profile";
import connectDb from "@/utils/connectDb";

interface PageProps {
  params: Promise<{ buyId: string }>;
}

const page = async ({ params }: PageProps) => {
  const { buyId: _id } = await params;

  await connectDb();
  const profile = await Profile.findOne({ _id }).select("-userId");
  if (!profile) return <h3> مشکلی پیش آمده است </h3>;
  return <DetailsPage data={profile} />;
};

export default page;

export const generateMetadata = async ({ params }: PageProps) => {
  const { buyId: _id } = await params;
  await connectDb();
  const profile = await Profile.findOne({ _id });

  const { title, description } = profile;

  return {
    title,
    description,
  };
};
