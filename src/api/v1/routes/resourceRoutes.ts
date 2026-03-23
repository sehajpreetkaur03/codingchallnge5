import { Router } from "express";
import { resourceController } from "../controllers/resourceController";

const router = Router();

/**
 * @swagger
 * /api/v1/resources:
 *   get:
 *     summary: Get all resources
 *     description: Returns all resources with a count
 *     responses:
 *       200:
 *         description: List of all resources
 */
router.get("/", resourceController.getAll);

export default router;