import {Router} from "express";
import {TransactionController} from "@/interfaces/http/controllers/TransactionController.js";
import {CreateTransactionSchema} from "@/interfaces/http/validation/transaction/CreateTransactionSchema.js";
import {validate} from "@/interfaces/http/validation/validate.js";

export const transactionRoutes=(controller: TransactionController) :Router => {
    const router = Router();

    router.post('/',validate(CreateTransactionSchema),controller.create.bind(controller));
    router.get('/',controller.getAll.bind(controller));
    router.delete('/:id',controller.delete.bind(controller));

    return router;
}
