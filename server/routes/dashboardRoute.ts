import { Hono } from "hono";
import blogRoute from "./blogRoute";
import userRoute from "./userRoute";

const dashboardRoute = new Hono();

dashboardRoute.route("/blog", blogRoute);
dashboardRoute.route("/gallery", blogRoute);
dashboardRoute.route("/menu", blogRoute);
dashboardRoute.route("/reservation", blogRoute);
dashboardRoute.route("/users", userRoute);

export default dashboardRoute;
