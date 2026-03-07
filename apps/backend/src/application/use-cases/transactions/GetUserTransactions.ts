import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";

export class GetUserTransactions{
    constructor(private readonly transactionRepository: TransactionRepository){}

    async execute(userId: string){
        return this.transactionRepository.findByUserId(userId)
    }
}