
import { BadRequestError, ConflictError, NotFoundError, ServerError, TooManyRequestError, UnauthenticatedError, UnauthorizedError, ValidationError } from "../../lib/error-definitions.js";

export default function (err, req, res, next) {
    if (
        err instanceof NotFoundError ||
        err instanceof BadRequestError ||
        err instanceof ConflictError ||
        err instanceof UnauthenticatedError ||
        err instanceof UnauthorizedError ||
        err instanceof TooManyRequestError ||
        err instanceof ServerError
    ) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    if (err instanceof ValidationError)
    {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }

    return res.status(500).json({
        success: false,
        message: err.message,
    });
}
  