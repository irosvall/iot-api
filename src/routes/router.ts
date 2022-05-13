/**
 * The main router.
 */

import express, {Request, Response, NextFunction} from 'express'
import createError from 'http-errors'
import {router as plantRouter} from "./plant-router";

export const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res
        .status(200)
        .json({message: 'Welcome to the API!'})
})

router.use('/plant-details', plantRouter)

// Return 404 on invalid paths.
router.use('*', (req: Request, res: Response, next: NextFunction) => next(createError(404)))
