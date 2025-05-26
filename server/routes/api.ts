import { Hono } from "hono";
import dashboardRoute from "./dashboardRoute";
import requestRoute from "./requestRoute";

const api = new Hono();

api.get("/hi", (c) => c.json({ message: "Hey" }, 200));
api.route("/dashboard", dashboardRoute);
api.route("/request", requestRoute);

export default api;
