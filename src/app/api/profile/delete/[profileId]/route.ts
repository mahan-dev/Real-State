import { authOptions } from "@/helper/authOptions/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ profileId: string }>;
};

export const DELETE = async (req: Request, context: RouteContext) => {
  try {
    await connectDb();
    const params = await context.params;
    const id = params.profileId;

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "ابتدا وارد حساب کابری خود شوید",
        },
        { status: 401 }
      );

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "حساب کابری پیدانشد",
        },
        { status: 404 }
      );

    const profile = await Profile.findOne({ _id: id });

    const userId = user._id as Types.ObjectId;
    const profileId = profile.userId as Types.ObjectId;

    if (!userId.equals(profileId))
      return NextResponse.json(
        {
          status: "Failed",
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );

    await profile.deleteOne({ _id: id });

    return NextResponse.json(
      {
        status: "Success",
        message: "با موفقیت حذف شد",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در سرور رخ داده است",
      },
      { status: 500 }
    );
  }
};
