import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{ profileId: string }>;
}

export const PATCH = async (req: Request, context: RouteContext) => {
  try {
    await connectDb();
    const params = await context.params;
    const id = params.profileId;

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: " ابتدا وارد حساب کابری خود شوید ",
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

    if (user.role !== "ADMIN")
      return NextResponse.json(
        {
          status: "Failed",
          error: "دسترسی شما محدود شده",
        },
        { status: 403 }
      );

    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    await profile.save();

    return NextResponse.json(
      { status: "Success", message: "آگهی منتشر شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در سرور رخ داده",
      },
      { status: 500 }
    );
  }
};
