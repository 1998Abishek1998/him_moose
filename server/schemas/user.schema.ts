import { isValidEmail, isValidUsername } from "../utils/validators";
import z from "../utils/zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Please provide login email" })
    .refine((d) => isValidEmail(d), {
      message: "Invalid email provide",
    }),
  password: z.string({ required_error: "Please provide passowrd." }),
});

export const CreateUserSchema = z
  .object({
    name: z.string({ required_error: "Please provide username." }),
    email: z
      .string({ required_error: "Please provide email" })
      .refine((d) => isValidEmail(d), {
        message: "Invalid email provide",
      }),
    password: z.string({ required_error: "Please provide passowrd." }),
    confirmPassword: z.string({
      required_error: "Please provide confirmPassword.",
    }),
  })
  .refine(
    ({ password, confirmPassword }) => {
      if (password !== confirmPassword) return false;
      else true;
    },
    {
      message: "Password and Confirm Paswword is not equal.",
    }
  );

export type LoginPayload = z.infer<typeof LoginSchema>;
export type CreateUserPayload = z.infer<typeof CreateUserSchema>;
