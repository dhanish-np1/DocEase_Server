export class AppError extends Error {
    constructor(
        public message: string,
        public statusCode: number,
        public errorCode: string
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// 400 Bad Request
export class BadRequestError extends AppError {
    constructor(message: string = 'Bad request', errorCode: string = 'BAD_REQUEST') {
        super(message, 400, errorCode);
    }
}

// 401 Unauthorized
export class UnauthorizedError extends AppError {
    constructor(message: string = 'Unauthorized', errorCode: string = 'UNAUTHORIZED') {
        super(message, 401, errorCode);
    }
}

// 403 Forbidden
export class ForbiddenError extends AppError {
    constructor(message: string = 'Forbidden', errorCode: string = 'FORBIDDEN') {
        super(message, 403, errorCode);
    }
}

// 404 Not Found
export class NotFoundError extends AppError {
    constructor(message: string = 'Not found', errorCode: string = 'NOT_FOUND') {
        super(message, 404, errorCode);
    }
}

// 409 Conflict
export class ConflictError extends AppError {
    constructor(message: string = 'Conflict', errorCode: string = 'CONFLICT') {
        super(message, 409, errorCode);
    }
}

// 422 Unprocessable Entity
export class ValidationError extends AppError {
    constructor(message: string = 'Validation failed', errorCode: string = 'VALIDATION_ERROR') {
        super(message, 422, errorCode);
    }
}

// 429 Too Many Requests
export class RateLimitError extends AppError {
    constructor(message: string = 'Too many requests', errorCode: string = 'RATE_LIMIT_EXCEEDED') {
        super(message, 429, errorCode);
    }
}

// 500 Internal Server Error
export class InternalServerError extends AppError {
    constructor(message: string = 'Internal server error', errorCode: string = 'INTERNAL_SERVER_ERROR') {
        super(message, 500, errorCode);
    }
}

// 503 Service Unavailable
export class ServiceUnavailableError extends AppError {
    constructor(message: string = 'Service unavailable', errorCode: string = 'SERVICE_UNAVAILABLE') {
        super(message, 503, errorCode);
    }
}

// Custom application-specific errors
export class DatabaseError extends AppError {
    constructor(message: string = 'Database operation failed', errorCode: string = 'DATABASE_ERROR') {
        super(message, 500, errorCode);
    }
}

export class NetworkError extends AppError {
    constructor(message: string = 'Network operation failed', errorCode: string = 'NETWORK_ERROR') {
        super(message, 500, errorCode);
    }
}

export class PaymentError extends AppError {
    constructor(message: string = 'Payment processing failed', errorCode: string = 'PAYMENT_ERROR') {
        super(message, 400, errorCode);
    }
}

export class AuthenticationError extends AppError {
    constructor(message: string = 'Authentication failed', errorCode: string = 'AUTHENTICATION_ERROR') {
        super(message, 401, errorCode);
    }
}

export class AuthorizationError extends AppError {
    constructor(message: string = 'Authorization failed', errorCode: string = 'AUTHORIZATION_ERROR') {
        super(message, 403, errorCode);
    }
}

export class InvalidOTPError extends AppError {
    constructor(message: string = 'Invalid OTP. Please try again.', errorCode: string = 'INVALID_OTP') {
        super(message, 400, errorCode);
    }
}
