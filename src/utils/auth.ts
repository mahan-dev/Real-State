import bcrypt from "bcryptjs";
import { verify } from "jsonwebtoken";
import {
  hashedPasswordType,
  verifyPasswordType,
  verifyTokenType,
} from "@/utils/Types/route";

const hashedPassword: hashedPasswordType = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

const verifyPassword: verifyPasswordType = async (password, hashPassword) => {
  const isValid = await bcrypt.compare(password, hashPassword);
  return isValid;
};

type TokenPayload = {
  email: string;
};

const verifyToken: verifyTokenType = (token, secretKey) => {
  try {
    const result = verify(token, secretKey) as TokenPayload;
    return {
      email: result.email,
    };
  } catch {
    return false;
  }
};

export { hashedPassword, verifyPassword, verifyToken };
