/**
 * The starting point of the application.
 */

import express, {Application, Request, Response, NextFunction} from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import {router} from './routes/router'
import {HttpError} from "./models/errors/http-error";

/**
 * The main function to start the program.
 */
const main = async () => {
    const app: Application = express()

    // Set various HTTP headers to make the application little more secure (https://www.npmjs.com/package/helmet).
    app.use(helmet())

    // Set up a morgan logger using the dev format for log entries.
    app.use(logger('dev'))

    // Parse requests of the content type application/json.
    app.use(express.json())

    // Register routes.
    app.use('/', router)

    // Error handler.
    app.use(function (error: HttpError, req: Request, res: Response, next: NextFunction) {
        error.status = error.status || 500

        if (req.app.get('env') !== 'development') {
            res
                .status(error.status)
                .json({
                    status: error.status,
                    message: error.message
                })
            return
        }

        // Providing detailed error in development.
        return res
            .status(error.status)
            .json({
                status: error.status,
                message: error.message,
                innerException: error.innerException,
                stack: error.stack
            })
    })

    // Starts the HTTP server listening for connections.
    app.listen(process.env.PORT, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`)
        console.log('Press Ctrl-C to terminate...')

    })

}

main().catch(console.error)
