/**
 * The plant router.
 */

import express, {Request, Response, NextFunction} from 'express'
import {PlantController} from "../controllers/plant-controller";

export const router = express.Router()
const controller = new PlantController()

router.get('/', (req: Request, res: Response, next: NextFunction) => controller.getAllData(req, res, next))
