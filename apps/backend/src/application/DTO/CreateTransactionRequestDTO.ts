import type {TransactionType} from "@/domain/entities/Transaction.js";

export interface CreateTransactionRequestDTO {
    type: TransactionType;
    amount: number;
    description?: string;
    category?: string;
    accountId?: string;
    fromAccountId?: string;
    toAccountId?: string;
    date: string | Date;
}
