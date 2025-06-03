import { Context } from "hono";
import { LoginPayload } from "../schemas/user.schema";

const login = async (c: Context) => {
  const body: LoginPayload = await c.req.json();
  
  return c.json({ message: "Success" });
};

export default login;
