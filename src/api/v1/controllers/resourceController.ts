import { Request, Response } from "express";
import { resourceService } from "../services/resourceService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const resourceController = {
    getAll: (req: Request, res: Response) => {
    const resources = resourceService.getAll();
    res.status(HTTP_STATUS.OK).json({
        message: "Resources retrieved",
        count: resources.length,
        data: resources,
    
        });
    },
    getById: (req: Request, res: Response) => {
    const resource = resourceService.getById(Number(req.params.id));
    if (!resource) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found",
        });
    }
    res.status(HTTP_STATUS.OK).json({
        message: "Resource retrieved",
        data: resource,
    });
    },  
};

