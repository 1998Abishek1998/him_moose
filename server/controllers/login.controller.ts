import { Context } from "hono";
import { LoginPayload } from "../schemas/user.schema";
import services from "../services";

const login = async (c: Context) => {
  const body: LoginPayload = await c.req.json();
  console.log("h121")
  const data = await services.users.validateUser(body);
  return c.json(data);
};

export default login;
