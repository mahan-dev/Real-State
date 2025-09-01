import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import User from "@/models/User";
import Profile from "@/models/Profile";
import { Types } from "mongoose";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const body = await req.json();

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب کابری خود شوید" },
        { status: 401 }
      );

    const email = session.user.email;

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کابری پیدانشد !" },
        { status: 404 }
      );

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وراد کنید" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      userId: new Types.ObjectId(user._id as string),
    });

    return NextResponse.json(
      {
        message: " آگهی با موفقیت اضافه شد",
        data: newProfile,
      },
      {
        status: 201,
      }
    );
  } catch {
    NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
};
