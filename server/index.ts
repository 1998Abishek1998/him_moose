import { serveStatic } from "hono/bun";
import { HTTPException } from "hono/http-exception";
import { env } from "./config/env";
import app from "./server/app";

app.get("*", serveStatic({ root: "./dist/build" }));
app.get("*", serveStatic({ path: "./dist/build/index.html" }));

app.notFound((c) => {
  return c.json("Page not Found", 404);
});

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    // Get the custom response
    console.log(err.name, err.cause);
    return c.json({ message: err.message }, 400);
  }
  console.error(JSON.stringify(err));
  return c.json({ mesage: err.message }, 500);
});

Bun.serve({
  fetch: app.fetch,
  hostname: "0.0.0.0",
  port: env.PORT,
});

console.log(`App started at port -> ${env.PORT}`);
