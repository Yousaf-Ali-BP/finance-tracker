import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";
import {TransactionNotFoundError} from "@/application/errors/index.js";

export class DeleteTransaction{
    constructor(private readonly transactionRepository: TransactionRepository){}
    async execute(id: string){
        const transaction = await this.transactionRepository.findById(id);
        if (!transaction) {
            throw new TransactionNotFoundError();
        }

        await this.transactionRepository.deleteById(id);
    }
}
