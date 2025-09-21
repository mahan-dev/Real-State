import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { authOptions } from "@/helper/authOptions/route";

export const GET = async () => {
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

  return NextResponse.json(
    {
      status: "Success",
      message: "اطلاعات به درستی گرفته شد",
      data: user.role,
    },
    { status: 200 }
  );
};
