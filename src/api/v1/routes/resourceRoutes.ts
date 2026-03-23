import { Router } from "express";
import { resourceController } from "../controllers/resourceController";

const router = Router();

/**
 * @openapi
 * /api/v1/resources:
 *   get:
 *     summary: Retrieve all resources
 *     description: Returns all resources in the library with a total count
 *     tags: [Resources]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all resources
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resources retrieved"
 *                 count:
 *                   type: integer
 *                   example: 4
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Resource'
 */
router.get("/", resourceController.getAll);
/**
 * @openapi
 * /api/v1/resources/{id}:
 *   get:
 *     summary: Retrieve a single resource by ID
 *     description: Returns a single resource matching the provided ID
 *     tags: [Resources]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the resource
 *     responses:
 *       '200':
 *         description: Successfully retrieved the resource
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource retrieved"
 *                 data:
 *                   $ref: '#/components/schemas/Resource'
 *       '404':
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", resourceController.getById);
/**
 * @openapi
 * /api/v1/resources:
 *   post:
 *     summary: Create a new resource
 *     description: Adds a new resource to the library. title, type, and url are required.
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Express.js Guide"
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *                 example: "article"
 *               url:
 *                 type: string
 *                 example: "https://example.com/resource"
 *               description:
 *                 type: string
 *                 example: "A helpful resource"
 *     responses:
 *       '201':
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource created"
 *                 data:
 *                   $ref: '#/components/schemas/Resource'
 *       '400':
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", resourceController.create);
export default router;