import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";
import {Transaction, type TransactionProps} from "@/domain/entities/Transaction.js";

export class CreateTransaction {
    constructor(private readonly transactionRepository: TransactionRepository) {}

    async execute(data: Transaction): Promise<void> {
        const transactionData: TransactionProps = {
            userId: data.userId,
            type: data.type,
            amount: data.amount,
            date: data.date,
            createdAt: new Date(),
        };

        if (data.description !== undefined) transactionData.description = data.description;
        if (data.category !== undefined) transactionData.category = data.category;
        if (data.accountId !== undefined) transactionData.accountId = data.accountId;
        if (data.fromAccountId !== undefined) transactionData.fromAccountId = data.fromAccountId;
        if (data.toAccountId !== undefined) transactionData.toAccountId = data.toAccountId;

        const transaction = new Transaction(transactionData);

        await this.transactionRepository.create(transaction);
    }
}
