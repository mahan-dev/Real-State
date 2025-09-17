import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const DELETE = async (req: Response) => {
  await connectDb();

  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { status: "Failed", error: "ابتدا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );

  const user = await User.findOne({ email: session.user.email });
  if (!user)
    return NextResponse.json({ status: "Failed", error: "کابری پیدانشد" });

  if (user.role !== "ADMIN")
    return NextResponse.json(
      {
        status: "Failed",
        message: "دسترسی شما محدود شده است",
      },
      { status: 403 }
    );

  await Profile.deleteOne({ userId: user._id });


  return NextResponse.json(
    {
      status: "Success",
      message: "آگهی مورد نظر پاک شد",
    },
    { status: 200 }
  );
};
