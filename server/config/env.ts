import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "my-secret-key",
  DATABASE_URL:
    process.env.DATABASE_URL || "mysql://root:Password!123@localhost:3306/bi",
  VITE_BASE_URL_FE: process.env.VITE_BASE_URL_FE || "http://localhost:5173",
  FULFILMENT_SECRET_KEY: process.env.FULFILMENT_SECRET_KEY || "somesekret",
  CONTRACTUAL_SECRET_KEY: process.env.CONTRACTUAL_SECRET_KEY || "somesekret",
  ODT_SECRET_KEY: process.env.ODT_SECRET_KEY || "somesekret",
  OD_SECRET_KEY: process.env.OD_SECRET_KEY || "somesekret",
  AWS_REGION: process.env.AWS_REGION || "ap-south-1",
  AWS_S3_LOCATION_ATHENA: process.env.AWS_S3_LOCATION_ATHENA || "",
  AWS_S3_USERNAME: process.env.AWS_S3_USERNAME || "",
  AWS_S3_PASSWORD: process.env.AWS_S3_PASSWORD || "",
};
