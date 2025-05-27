import { Hono } from "hono";

const blogRoute = new Hono()

blogRoute.get("/")
export default blogRoute