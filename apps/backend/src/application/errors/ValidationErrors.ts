import {AppError} from "@/application/errors/AppError.js";

export class ValidationError extends AppError {
    constructor() {
        super('VALIDATOR_ERROR','Invalid request data',400);
    }
}

export class MissingRequiredFieldError extends AppError {
    constructor() {
        super('MISSING_REQUIRED_FIELD','Required field is missing',400);
    }
}

export class InvalidEmailFormatError extends AppError {
    constructor() {
        super('INVALID_EMAIL_FORMATE','Email format is invalid',400);
    }
}

export class InvalidPasswordFormatError extends AppError {
    constructor() {
        super('INVALID_PASSWORD_FORMATE','Password does not meet criteria',400);
    }
}
