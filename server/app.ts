import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { csrf } from "hono/csrf";
import { Bindings, Variables } from "./types/shared";
import { env } from "./config/env";
import { customLogger } from "./utils/customLogger";
import api from "./routes/api";
import { dbConnect } from "./config/db";

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use(
  cors({
    origin: env.VITE_BASE_URL_FE,
    allowHeaders: [
      "X-Custom-Header",
      "Upgrade-Insecure-Requests",
      "Content-Type",
      "Authorization",
    ],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: [
      "Content-Length",
      "X-Kuma-Revision",
      "Origin",
      "Content-Type",
      "Accept-Encoding",
      "X-CSRF-Token",
      "Authorization",
    ],
    maxAge: 600,
    credentials: true,
  })
);

app.use(
  secureHeaders({
    strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
    xFrameOptions: "DENY",
    xXssProtection: "1",
  })
);

app.use(csrf());
app.use(prettyJSON());
app.use(logger(customLogger));

app.route("/api", api);
dbConnect()
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db error ", err));
export default app;
