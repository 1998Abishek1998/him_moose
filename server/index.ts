import { serveStatic } from "hono/bun";
import { HTTPException } from "hono/http-exception";
import { env } from "./config/env";
import app from "./app";
import mongoose from "mongoose";
import { Context } from "hono";

// app.get("*", serveStatic({ root: "./dist/build" }))
app.get("*", serveStatic({ path: "./dist/build/index.html" }));

app.notFound((c) => {
  return c.json("Page not Found", 404);
});

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ error: err.getResponse().body }, err.status);
  }
  if (err instanceof mongoose.Error.ValidationError) {
    c.json({ error: err.message }, 404);
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
