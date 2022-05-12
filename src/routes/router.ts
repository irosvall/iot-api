import express, { Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

export const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
        res
            .status(200)
            .json({message: 'Welcome to the API!'})
    })

// Return 404 on invalid paths.
router.use('*', (req: Request, res: Response, next: NextFunction) => next(createError(404)))
