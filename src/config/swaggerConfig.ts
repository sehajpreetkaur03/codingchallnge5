import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Resource Library API",
            version: "1.0.0",
            description: "API for managing a library of resources",
        },
        components: {
            schemas: {
                Resource: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        title: { type: "string", example: "Express.js Guide" },
                        type: {
                            type: "string",
                            enum: ["article", "video", "tutorial", "documentation"],
                            example: "documentation",
                        },
                        url: { type: "string", example: "https://expressjs.com/en/guide" },
                        description: { type: "string", example: "Official Express.js documentation" },
                        createdAt: { type: "string", example: "2025-02-20T10:30:00.000Z" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: { type: "string", example: "Resource not found" },
                    },
                },
            },
        },
    },
    apis: ["./src/api/v1/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);