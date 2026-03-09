import type { NextFunction, Request, Response } from "express";
import type {CreateTransactionRequestDTO} from "@/application/DTO/CreateTransactionRequestDTO.js";
import type {DeleteTransactionParamsDTO} from "@/application/DTO/DeleteTransactionParamsDTO.js";
import {CreateTransaction} from "@/application/use-cases/transactions/CreateTransaction.js";
import {GetUserTransactions} from "@/application/use-cases/transactions/GetUserTransactions.js";
import {DeleteTransaction} from "@/application/use-cases/transactions/DeleteTransaction.js";
import {UnauthorizedError} from "@/application/errors/index.js";

export class TransactionController {

    constructor(
        private readonly createTransaction: CreateTransaction,
        private readonly getUserTransactions: GetUserTransactions,
        private readonly deleteTransaction: DeleteTransaction,
    ) {}

    async create(req: Request<Record<string, never>, unknown, CreateTransactionRequestDTO>, res: Response, next: NextFunction) {
        const userId = req.user?.sub;
        if (!userId) {
            return next(new UnauthorizedError());
        }

        const payload = req.body as CreateTransactionRequestDTO;
        await this.createTransaction.execute({
            userId,
            ...payload,
        })

        res.status(201).json({message: "Transaction created successfully."})
    }

    async getAll(req: Request, res: Response,next: NextFunction) {
        const userId = req.user?.sub;
        if (!userId) {
            return next(new UnauthorizedError());
        }

        const transactions=await this.getUserTransactions.execute(userId)

        res.json({transactions})
    }

    async delete(req: Request<DeleteTransactionParamsDTO>, res: Response, next: NextFunction) {
        const { id } = req.params as DeleteTransactionParamsDTO;
        await this.deleteTransaction.execute(id)
        res.status(204).json({message: "Transaction deleted"})
    }
}
