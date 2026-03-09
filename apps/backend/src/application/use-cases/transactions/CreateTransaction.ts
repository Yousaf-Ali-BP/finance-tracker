import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";
import {Transaction, type TransactionProps} from "@/domain/entities/Transaction.js";
import type {CreateTransactionRequestDTO} from "@/application/DTO/CreateTransactionRequestDTO.js";
import {InvalidTransactionDataError} from "@/application/errors/index.js";

interface CreateTransactionInput extends CreateTransactionRequestDTO {
    userId: string;
}

export class CreateTransaction {
    constructor(private readonly transactionRepository: TransactionRepository) {}

    async execute(data: CreateTransactionInput): Promise<void> {
        const date = data.date instanceof Date ? data.date : new Date(data.date);
        if (Number.isNaN(date.getTime())) {
            throw new InvalidTransactionDataError("Invalid transaction date");
        }

        const transactionData: TransactionProps = {
            userId: data.userId,
            type: data.type,
            amount: data.amount,
            date,
            createdAt: new Date(),
        };

        if (data.description !== undefined) transactionData.description = data.description;
        if (data.category !== undefined) transactionData.category = data.category;
        if (data.accountId !== undefined) transactionData.accountId = data.accountId;
        if (data.fromAccountId !== undefined) transactionData.fromAccountId = data.fromAccountId;
        if (data.toAccountId !== undefined) transactionData.toAccountId = data.toAccountId;

        let transaction: Transaction;
        try {
            transaction = new Transaction(transactionData);
        } catch (error) {
            if (error instanceof Error) {
                throw new InvalidTransactionDataError(error.message);
            }
            throw new InvalidTransactionDataError();
        }

        await this.transactionRepository.create(transaction);
    }
}
