import { Hono } from "hono";
import login from "../controllers/login.controller";
import { validateSchema } from "../middlewares/validate-schema";
import { LoginSchema } from "../schemas/user.schema";
import { zValidator } from "@hono/zod-validator";
import blogRoute from "./blogRoute";
import userRoute from "./userRoute";

const dashboardRoute = new Hono();

dashboardRoute.post(
  "/login",
  zValidator("json", LoginSchema, validateSchema),
  login
);

dashboardRoute.route("/blog", blogRoute);
dashboardRoute.route("/gallery", blogRoute);
dashboardRoute.route("/menu", blogRoute);
dashboardRoute.route("/reservation", blogRoute);
dashboardRoute.route("/users", userRoute);

export default dashboardRoute;
