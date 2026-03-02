import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";
import {Transaction} from "@/domain/entities/Transaction.js";
import {TransactionModel} from "@/infrastructure/database/models/TransactionModel.js";
import {TransactionMapper} from "@/infrastructure/database/mappers/TransactionMapper.js";
import {Types} from "mongoose";

export class MongoTransactionRepository implements TransactionRepository {

    async create(transaction: Transaction): Promise<Transaction> {
        const persistence = TransactionMapper.toPersistence(transaction);
        const createdDoc = await TransactionModel.create(persistence)
        return TransactionMapper.toDomain(createdDoc)
    }

    async findById(id: string): Promise<Transaction | null> {
        const doc = await TransactionModel.findById(id)
        if (!doc) return null;
        return TransactionMapper.toDomain(doc)
    }

    async findByUserId(userId: string): Promise<Transaction[]> {
        const docs = await TransactionModel.find({userId})
        return TransactionMapper.toDomainList(docs)
    }

    async deleteById(id: string): Promise<void> {
        await TransactionModel.findByIdAndDelete(new Types.ObjectId(id))
    }

}
