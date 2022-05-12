/**
 * A model for HTTP errors.
 */
export class HttpError extends Error {
    status: number
    message: string
    stack: string | undefined
    innerException: any

    constructor(status: number, message: string, innerException: any = undefined) {
        super(message)
        this.message = message
        this.status = status
        this.innerException = innerException
        this.stack = super.stack
    }
}
