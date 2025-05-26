import { isValidEmail, isValidUsername } from "../utils/validators";
import z from "../utils/zod";

const LoginSchema = z.object({
  username: z
    .string({ required_error: "Please provide login username" })
    .refine((d) => isValidEmail(d) || isValidUsername(d), {
      message: "Invalid username provide",
    }),
  password: z.string({ required_error: "Please provide passowrd." }),
});

export default LoginSchema
export type LoginPayload = z.infer<typeof LoginSchema>;
