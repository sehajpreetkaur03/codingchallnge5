import cors from "cors";

// Read allowed origins from the environment variable.
// The value comes as one string, so we split it by commas into an array.
const allowedOrigins: string[] =
  process.env.ALLOWED_ORIGINS?.split(",").map((origin) => origin.trim()) || [];

export const corsConfig = cors({
  // Only allow requests from the approved origins in the .env file.
  origin: allowedOrigins,

  // Allow only the methods required for this challenge.
  methods: ["GET", "POST", "PUT", "DELETE"],

  // Allow these common headers in requests.
  allowedHeaders: ["Content-Type", "Authorization"],

  // Cache preflight response for 10 minutes.
  // This reduces repeated browser preflight requests.
  maxAge: 600,
});