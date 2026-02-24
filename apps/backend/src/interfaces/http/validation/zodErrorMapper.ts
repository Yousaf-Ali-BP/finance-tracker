import {ValidationError} from "@/application/errors/ValidationError.js";
import {ZodError} from "zod";

export const zodErrorMapper = (err: ZodError):ValidationError => {
    const issue = err.issues[0];
    if (!issue) {
        return new ValidationError("VALIDATION_ERROR", "Validation failed");
    }
    const field = String(issue.path[0] ?? "FIELD").toUpperCase();

    let code:string

    switch (issue.code){
        case 'invalid_format':
            code=`${field}_INVALID_FORMAT`
            break;

        case 'too_small':
            code=`${field}_TOO_SMALL`
            break;

        case 'too_big':
            code=`${field}_TOO_BIG`
            break;

        default:
            code=`${field}_INVALID_FORMAT`
    }
    return new ValidationError(code,issue.message);
}
