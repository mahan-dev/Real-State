import { ProfileTypes } from "@/models/interface/ProfileTypes";
import Profile from "@/models/Profile";

export const profileHandler = async (): Promise<ProfileTypes[]> => {
  try {
    const profile = await Profile.find()
      .select("-userId");
    return profile;
  } catch {
    return [];
  }
};
