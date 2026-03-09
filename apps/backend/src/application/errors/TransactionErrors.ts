import {AppError} from "@/application/errors/AppError.js";

export class InvalidTransactionDataError extends AppError {
    constructor(message: string = "Invalid transaction data") {
        super("INVALID_TRANSACTION_DATA", message, 400);
    }
}

export class TransactionNotFoundError extends AppError {
    constructor() {
        super("TRANSACTION_NOT_FOUND", "Transaction not found", 404);
    }
}
