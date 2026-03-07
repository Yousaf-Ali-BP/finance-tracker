import type {TransactionDocument} from "@/infrastructure/database/models/TransactionModel.js";
import type {TransactionProps} from "@/domain/entities/Transaction.js";
import {Types} from "mongoose";
import {Transaction} from "@/domain/entities/Transaction.js";

export class TransactionMapper {
    static toDomain(doc: TransactionDocument): Transaction {

        const baseProps: TransactionProps = {
            id: doc._id.toString(),
            userId: doc.userId.toString(),
            type: doc.type,
            amount: doc.amount,
            date: doc.date,
            createdAt: doc.createdAt,
        };
        if (doc.description !== undefined) {
            baseProps.description = doc.description;
        }

        if (doc.type === "transfer") {
            const transferProps: TransactionProps = {...baseProps};
            if (doc.fromAccountId !== undefined) {
                transferProps.fromAccountId = doc.fromAccountId.toString();
            }
            if (doc.toAccountId !== undefined) {
                transferProps.toAccountId = doc.toAccountId.toString();
            }
            return new Transaction(transferProps);
        }

        const incomeExpenseProps: TransactionProps = {...baseProps};
        if (doc.category !== undefined) {
            incomeExpenseProps.category = doc.category;
        }
        if (doc.accountId !== undefined) {
            incomeExpenseProps.accountId = doc.accountId.toString();
        }
        return new Transaction(incomeExpenseProps);

    }


    static toDomainList(docs: TransactionDocument[]): Transaction[] {
        return docs.map(doc => this.toDomain(doc))
    }


    static toPersistence(transaction: Transaction): any {
        const doc: any = {
            userId: new Types.ObjectId(transaction.userId),
            type: transaction.type,
            amount: transaction.amount,
            date: transaction.date,
            createdAt: new Date(),
        }

        if (transaction.description !== undefined) {
            doc.description = transaction.description;
        }

        if (transaction.type === "income" || transaction.type === "expense") {
            doc.category = transaction.category;
            doc.accountId = new Types.ObjectId(transaction.accountId);
        }

        if (transaction.type === "transfer") {
            doc.fromAccountId = new Types.ObjectId(transaction.fromAccountId);
            doc.toAccountId = new Types.ObjectId(transaction.toAccountId);
        }

        return doc
    }
}

