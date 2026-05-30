import {z} from "zod";

export const MessageSchema = z.object({
    content: z
    .string()
    .min(10, {message: 'content must be at least of 10 Characters'})
    .max(300, {message: 'content must be maximum 300 Characters'})
    
})