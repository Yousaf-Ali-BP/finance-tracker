import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().min(8).max(72).trim(),
})