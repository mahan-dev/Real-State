import Profile from "@/models/Profile";

export const profileHandler = async () => {
  try {
    const profile = await Profile.find().select("-userId");
    return profile;
  } catch {
    return false;
  }
};
