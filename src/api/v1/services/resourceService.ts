import { Resource } from "../models/resourceModel";

let resources: Resource[] = [
    { id: 1, title: "Express.js Guide", type: "documentation", url: "https://expressjs.com/en/guide", description: "Official Express.js documentation", createdAt: "2025-02-20T10:30:00.000Z" },
    { id: 2, title: "TypeScript Basics", type: "video", url: "https://example.com/ts-basics", description: "Introduction to TypeScript", createdAt: "2025-02-20T10:30:00.000Z" },
    { id: 3, title: "REST API Design", type: "article", url: "https://example.com/rest-design", description: "Best practices for REST API design", createdAt: "2025-02-20T10:30:00.000Z" },
    { id: 4, title: "Jest Testing Tutorial", type: "tutorial", url: "https://example.com/jest-tutorial", description: "Complete guide to testing with Jest", createdAt: "2025-02-20T10:30:00.000Z" },
];

let nextId = 5;

export const resourceService = {
    getAll: (): Resource[] => resources,
};