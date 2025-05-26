import { Hono } from "hono";
import login from "../controllers/login.controller";
import { validateSchema } from "../middlewares/validate-schema";
import LoginSchema from "../schemas/login.schema";
import { zValidator } from "@hono/zod-validator";

const dashboardRoute = new Hono();

dashboardRoute.post(
  "/login",
  zValidator("json", LoginSchema, validateSchema),
  login
);

export default dashboardRoute;
