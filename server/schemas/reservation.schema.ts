import z from "../utils/zod";

export const baseReservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(6, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  date: z.coerce.date().min(new Date(), "Date must be in the future"),
  time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  guestsCount: z
    .number()
    .int()
    .min(1, "At least 1 guest required")
    .max(50, "Maximum 50 guests allowed"),
  inquiry: z.string().max(500, "Inquiry too long").optional(),
});

export type baseReservationSchemaPaylaod = z.infer<
  typeof baseReservationSchema
>;
