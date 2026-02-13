import {AppError} from "@/application/errors/AppError.js";

export class InternalServerError extends AppError {
    constructor() {
        super('INTERNAL_SERVER_ERROR','Internal Server Error',500);
    }
}

export class ResourceNotFoundError extends AppError {
    constructor() {
        super('RESOURCE_NOT_FOUND','Resource Not Found',404);
    }
}

export class ForbiddenError extends AppError {
    constructor() {
        super('FORBIDDEN','Forbidden',403);
    }
}

export class DatabaseConnectionError extends AppError {
    constructor() {
        super('DATABASE_CONNECTION_ERROR', 'Database connection failed', 500);
    }
}
