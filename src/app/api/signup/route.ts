import User from "@/models/User";
import { hashedPassword } from "@/utils/auth";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        { status: "Failed", error: "لطفا اطلاعات به صورت صحیح وارد کنید !" },
        { status: 422 }
      );

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        {
          status: "Failed",
          error: " این کاربر وجود دارد ",
        },
        {
          status: 422,
        }
      );

    const hashPassword = await hashedPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashPassword,
    });

    return NextResponse.json(
      {
        status: "Success",
        message: "User created 👌",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در اتصال به دیتابیس رخ داده است",
      },
      {
        status: 500,
      }
    );
  }
};
