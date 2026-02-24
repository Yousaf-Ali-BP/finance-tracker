import * as z  from "zod";

export const RegisterSchema =z.object({
    name: z.string().min(2).max(50).trim(),
    email: z.email().trim().toLowerCase(),
    password: z.string().min(8).max(72).trim(),
})