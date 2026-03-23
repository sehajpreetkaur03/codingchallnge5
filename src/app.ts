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

dotenv.config();

const app: Express = express();

if (process.env.NODE_ENV === "production") {
  app.use(accessLogger);
  app.use(errorLogger);
} else {
  app.use(consoleLogger);
}

app.use(express.json());

// Helmet security headers
app.use(helmetConfig);

// CORS configuration
app.use(corsConfig);

// Hide Express signature header
app.disable("x-powered-by");

/**
 * Mount all API v1 routes here.
 * Your resourceRoutes file should contain:
 * /health
 * /resources
 * /resources/:id
 */
app.use("/api/v1", resourceRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

export default app;