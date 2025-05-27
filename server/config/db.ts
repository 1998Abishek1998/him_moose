import mongoose from "mongoose";
import { env } from "./env";

export const dbConnect = async () => {
  await mongoose.connect(env.DATABASE_URL, {
    maxPoolSize: 10,
  });
};
