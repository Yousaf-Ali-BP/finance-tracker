import mongoose, { Schema, Document, Types } from "mongoose";
import { TRANSACTION_TYPES } from "@/domain/entities/Transaction.js";
import type { TransactionType } from "@/domain/entities/Transaction.js";
export interface TransactionDocument extends Document {
    userId: Types.ObjectId;
    type: TransactionType;
    amount: number;
    description?: string;

    //Only for income and expense
    category?: string;
    accountId?: Types.ObjectId;

    //Only for transfer
    fromAccountId?: Types.ObjectId;
    toAccountId?: Types.ObjectId;

    date: Date;
    createdAt: Date;
}

const TransactionSchema = new Schema<TransactionDocument>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    type: {
        type: String,
        enum: TRANSACTION_TYPES,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },

    //Only for income and expense
    category: {
        type: String,
        required: function (this: TransactionDocument) {
            return this.type === "income" || this.type === "expense";
        },
    },
    accountId: {
        type: Schema.Types.ObjectId,
        required: function (this: TransactionDocument) {
            return this.type === "income" || this.type === "expense";
        },
    },

    //Only for transfer
    fromAccountId: {
        type: Schema.Types.ObjectId,
        required: function (this: TransactionDocument) {
            return this.type === "transfer";
        },
    },
    toAccountId: {
        type: Schema.Types.ObjectId,
        required: function (this: TransactionDocument) {
            return this.type === "transfer";
        },
    },

    date: {
        type: Date,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

export const TransactionModel = mongoose.model<TransactionDocument>("Transaction", TransactionSchema);
