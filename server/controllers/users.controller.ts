import { Context } from "hono";
import services from "../services";
import { CreateUserPayload } from "../schemas/user.schema";
import { hashPassword } from "../utils/bcrypt";

export const createUser = async (c: Context) => {
  const body: CreateUserPayload = await c.req.json();

  const user = await services.users.finUserByEmail(body.email);
  let message = "";
  let data = null;
  if (user && user.id) message = "User with email already exists";
  else {
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
      message = "Error while creating user";
      data = null;
    }
  }

  return c.json({ message, data }, 200);
};
