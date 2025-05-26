import { decode, sign, verify } from "hono/jwt";
import { env } from "../config/env";

export const jwtSign = async (payload: { sub: string; role: string }) => {
  const token = await sign(
    {
      ...payload,
      exp: Math.floor(Date.now() / 1000) + 60,
    },
    env.JWT_SECRET_KEY
  );
  return token;
};

export const jwtVerify = async (token: string) => {
  const decodedPayload = await verify(token, env.JWT_SECRET_KEY);
  return decodedPayload;
};

export const jwtDecode = async (token: string) => {
  const decoded = decode(token);
  return decoded;
};
