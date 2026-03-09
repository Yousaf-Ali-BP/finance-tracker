import {z} from 'zod';

export const CreateTransactionSchema = z.object({
    type:z.enum(['income','expense','transfer']),
    amount:z.number().positive(),
    description:z.string().min(1).max(255).trim().optional(),

    category:z.string().min(3).max(30).trim().optional(),
    accountId:z.string().optional(),

    fromAccountId:z.string().optional(),
    toAccountId:z.string().optional(),

    date:z.coerce.date()
})

