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
router.get("/:id", resourceController.getById);
router.post("/", resourceController.create);

export default router;