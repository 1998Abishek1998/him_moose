import { Hono } from "hono";
import { validateSchema } from "../middlewares/validate-schema";
import { zValidator } from "@hono/zod-validator";
import { CreateUserSchema } from "../schemas/user.schema";
import { createUser } from "../controllers/users.controller";

const userRoute = new Hono();

userRoute.post(
  "/create",
  zValidator("json", CreateUserSchema, validateSchema),
  createUser
);
export default userRoute;
