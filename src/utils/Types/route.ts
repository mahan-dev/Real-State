type hashedPasswordType = (password: string) => Promise<string>;

type verifyPasswordType = (
  password: string,
  hashPassword: string
) => Promise<boolean>;

type verifyTokenType = (
  token: string,
  secretKey: string
) => boolean | { email: string };

export type { hashedPasswordType, verifyPasswordType, verifyTokenType };
