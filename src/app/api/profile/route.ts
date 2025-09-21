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
    } = await req.json();

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
      rules,
      amenities,
      userId: new Types.ObjectId(user._id as string),
      metaData: {
        title,
        description,
      },
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

export const PATCH = async (req: Request) => {
  try {
    await connectDb();

    const {
      _id,
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
    } = await req.json();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({
        status: "Failed",
        error: "لطفا وارد حساب کابری خود شوید",
      });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { status: "Failed", error: " حساب کابری پیدانشد" },
        { status: 404 }
      );

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    )
      return NextResponse.json(
        {
          status: "Failed",
          error: "اطلاعات معتبر وارد کنید",
        },
        {
          status: 422,
        }
      );
    console.log(_id);

    const profile = await Profile.findOne({ _id });

    const userId = user._id as Types.ObjectId;
    const profileId = profile.userId as Types.ObjectId;

    if (!userId.equals(profileId))
      return NextResponse.json(
        {
          status: "Failed",
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        {
          status: 403,
        }
      );

    Object.assign(profile, {
      title,
      location,
      description,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    });

    await profile.save();
    return NextResponse.json(
      {
        status: "Success",
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: "Failed", error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectDb();
    const profile = await Profile.find({ published: true }).select("-userId");
    return NextResponse.json({ status: "Success", profile });
  } catch {
    NextResponse.json(
      { status: "Failed", error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};
