import bcrypt from "bcryptjs";
import { verify } from "jsonwebtoken";

const hashedPassword = async (password: string) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

const verifyPassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  const isValid = await bcrypt.compare(password, hashPassword);
  return isValid;
};

type TokenPayload = {
   email: string;
}

const verifyToken = (token: string, secretKey: string) => {
  try {
    const result = verify(token, secretKey) as TokenPayload;
    return {
      email: result.email ,
    };
  } catch {
    return false;
  }
};
        
export { hashedPassword, verifyPassword, verifyToken };
