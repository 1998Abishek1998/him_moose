import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "my-secret-key",
  DATABASE_URL:
    process.env.DATABASE_URL || "mysql://root:Password!123@localhost:3306/bi",
  VITE_BASE_URL_FE: process.env.VITE_BASE_URL_FE || "http://localhost:5173",
};
