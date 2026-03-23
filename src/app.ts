import express, { Express } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import {
  accessLogger,
  errorLogger,
  consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import resourceRoutes from "./api/v1/routes/resourceRoutes";
import { helmetConfig } from "./config/helmetConfig";
import { corsConfig } from "./config/corsConfig";
import { swaggerSpec } from "./config/swaggerConfig";
import { HTTP_STATUS } from "./constants/httpConstants";

dotenv.config();

const app: Express = express();

if (process.env.NODE_ENV === "production") {
  app.use(accessLogger);
  app.use(errorLogger);
} else {
  app.use(consoleLogger);
}

// Security middleware
app.use(helmetConfig);
app.use(corsConfig);

app.use(express.json());

// Health check endpoint
app.get("/api/v1/health", (_req, res) => {
  res.status(HTTP_STATUS.OK).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Resource routes
app.use("/api/v1/resources", resourceRoutes);

// Swagger UI docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

export default app;