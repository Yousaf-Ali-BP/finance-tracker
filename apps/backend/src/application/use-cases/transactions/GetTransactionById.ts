import type {TransactionRepository} from "@/domain/repositories/TransactionRepository.js";


export class GetTransactionById {
    constructor(private readonly transactionRepository: TransactionRepository) {}
    async execute(id: string){
        return this.transactionRepository.findById(id)
    }
}