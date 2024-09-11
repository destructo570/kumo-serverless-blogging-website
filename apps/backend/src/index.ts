import { Hono } from "hono";
import blogRoutes from "./routes/blog";
import authRoutes from "./routes/auth";
import { cors } from "hono/cors";

//All API's start with this base path
const app = new Hono();
app.use("/*", cors({
  origin: 'http://localhost:3000',
  allowHeaders: ['Origin', 'Content-Type', 'Authorization'],
  allowMethods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
}))
app.route("/api/v1/blog", blogRoutes);
app.route("/api/v1/auth", authRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono v4");
});

export default app;
