import {AppError} from "@/application/errors/AppError.js";

export class ValidationError extends AppError {
    constructor(code:string,message:string,statusCode:number=400) {
        super(code,message,statusCode)
    }
}

export class MissingRequiredFieldError extends ValidationError {
    constructor(field: string = "field") {
        super("MISSING_REQUIRED_FIELD", `Missing required ${field}`, 400);
    }
}
