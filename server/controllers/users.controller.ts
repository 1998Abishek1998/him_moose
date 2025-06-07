import { Context } from "hono";
import services from "../services";
import { CreateUserPayload } from "../schemas/user.schema";
import { hashPassword } from "../utils/bcrypt";
import { ContentfulStatusCode } from "hono/utils/http-status";

export const createUser = async (c: Context) => {
  const body: CreateUserPayload = await c.req.json();

  const user = await services.users.finUserByEmail(body.email);
  let message = "";
  let data = null;
  let status = 200 as ContentfulStatusCode;
  if (user && user.id) {
    status = 400;
    message = "User with email already exists";
  } else {
    try {
      const password = await hashPassword(body.password);
      const createdUser = await services.users.createUser({
        email: body.email,
        password: password,
        name: body.name,
      });
      
      message = "success";
      data = createdUser.id;
    } catch (error) {
      console.log(error);
      status = 400;
      message = "Error while creating user";
      data = null;
    }
  }

  return c.json({ message, data }, status);
};
