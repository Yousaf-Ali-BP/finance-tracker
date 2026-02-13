import {AppError} from "@/application/errors/AppError.js";

export class InvalidCredentialsError extends AppError {
    constructor() {
        super('INVALID_CREDENTIALS','Invalid email or password' , 401)
    }
}

export class UserAlreadyExistsError extends AppError {
    constructor() {
        super('USER_ALREADY_EXISTS','User already exists',409);
    }
}

export class UnauthorizedError extends AppError {
    constructor() {
        super('UNAUTHORIZED','Unauthorized',401);
    }
}

export class TokenExpiredError extends AppError {
    constructor() {
        super('TOKEN_EXPIRED','Authentication token expired',401);
    }
}

export class InvalidTokenError extends AppError {
    constructor() {
        super('INVALID_TOKEN','Invalid authentication token',401);
    }
}
