import { Context, Hono } from "hono";
import dashboardRoute from "./dashboardRoute";
import requestRoute from "./requestRoute";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema } from "../schemas/user.schema";
import { validateSchema } from "../middlewares/validate-schema";
import login from "../controllers/login.controller";

const api = new Hono();

api.get("/hi", (c) => c.json({ message: "Hey" }, 200));
api.post("/auth/login", zValidator("json", LoginSchema, validateSchema), login);

api.route("/dashboard", 
    // (c: Context) => {
    //     // validate Token
    // }
    // ,
    dashboardRoute);
    
api.route("/request", requestRoute);


export default api;
