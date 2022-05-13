import {Request, Response, NextFunction} from 'express'
import {PlantService} from "../services/plant-service";

/**
 * A controller for getting plant information.
 */
export class PlantController {
    private service: PlantService

    /**
     * Initializes a PlantController.
     */
    public constructor(service: PlantService = new PlantService()) {
        this.service = service
    }

    /**
     * Sends a JSON response containing all plant data.
     */
    public async getAllData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.service.getAllData()

            res.json(data)
        } catch (error) {
            next(error)
        }
    }
}