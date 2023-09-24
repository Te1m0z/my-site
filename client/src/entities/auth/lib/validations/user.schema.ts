import { z } from "zod";

export const LoginUserSchema = z.object({
  login: z
    .string({
      invalid_type_error: "Wrong type",
      required_error: "Login is required",
    })
    .min(1, "Password is required"),
  password: z
    .string({
      invalid_type_error: "Wrong type",
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});

export type LoginUserInput = z.infer<typeof LoginUserSchema>;

