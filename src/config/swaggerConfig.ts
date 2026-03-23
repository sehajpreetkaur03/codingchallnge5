import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Resource Library API",
    version: "1.0.0",
    description: "API for managing educational resources",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options: swaggerJSDoc.Options = {
  definition: swaggerDefinition,
  apis: ["./src/api/v1/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);