import { verifyPassword } from "@/utils/auth";
import connectDb from "@/utils/connectDb";
import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "@/models/User";

interface UserCredentials {
  email: string;
  password: string;
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60 * 24
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials: UserCredentials): Promise<User | null> => {
        
        const { email, password } = credentials;

        try {
          await connectDb();
        } catch {
          throw new Error("database connection failed");
        }

        if (!email || !password)
          throw new Error(" لطفا اطلاعات معتبر وارد کنید");

        const user = await UserModel.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید ");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error(" ایمیل یا پسورد معتبر نیست ");
        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
