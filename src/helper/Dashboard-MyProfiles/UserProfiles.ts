import { FormValues } from "@/components/templates/interface/Interface";
import User from "@/models/User";
import { Types } from "mongoose";
import { Session } from "next-auth";

export interface Profiles extends FormValues {
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface UserProfilesProps {
  userId: Types.ObjectId;
  _id: Types.ObjectId;
  createdAt: Date;
  email: string;
  password: string;
  profiles: Profiles[];
}

export const userProfiles = async (
  session: Session
): Promise<UserProfilesProps[]> => {
  return await User.aggregate<UserProfilesProps>([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
};
