import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 Characters")
    .max(20, "Username must be no more then 20 Characters")
    .regex(/^[a-zA-Z0-9]_+$@/, "Username must not contain special Character")


    export const signUpSchema = z.object({
        username: usernameValidation,
        email: z.string().email({message: "invalid email address"}),
        password: z.string().min(6, {message: "password must be at least 6 Characters"})



    })