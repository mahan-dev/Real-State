import { getServerSession } from "next-auth";
import { authOptions } from "@/helper/authOptions/route";

import connectDb from "@/utils/connectDb";
import Profile from "@/models/Profile";
import User from "@/models/User";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({
        status: "Failed",
        error: " ابتدا وارد حساب کابری شوید",
      });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({
        status: "Failed",
        error: "ابتدا وارد حساب کابری خود شوید",
      });

    const profile = await Profile.find({ userId: user._id });
    if (!profile) return;
    return NextResponse.json({ status: "Success", data: profile.length });
  } catch {
    return NextResponse.json(
      { status: "Failed", error: "مشکلی در سمت سرور رخ داده" },
      { status: 500 }
    );
  }
};
