import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";

export class DeleteTransaction{
    constructor(private readonly transactionRepository: TransactionRepository){}
    async execute(id: string){
        return this.transactionRepository.deleteById(id)
    }
}