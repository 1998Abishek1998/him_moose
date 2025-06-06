import { Context } from "hono";
import { LoginPayload } from "../schemas/user.schema";
import services from "../services";
import { jwtSign } from "../utils/jwt";

const login = async (c: Context) => {
  const body: LoginPayload = await c.req.json();
  const data = await services.users.validateUser(body);

  let token = null;
  if (data && data.data) {
    token = await jwtSign({
      sub: data.data?.name || "",
      role: data.data?.email || "",
    });
  }
  return c.json({
    message: data.message,
    data: data.data,
    token,
  });
};

export default login;
