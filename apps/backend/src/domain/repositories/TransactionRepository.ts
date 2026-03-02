import {Transaction} from '../entities/Transaction.js';

export interface TransactionRepository {
    create(transaction: Transaction): Promise<Transaction>;
    findById(id: string): Promise<Transaction | null>;
    findByUserId(userId: string): Promise<Transaction[]>;
    deleteById(id: string): Promise<void>;
}
