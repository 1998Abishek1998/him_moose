import { MenuType } from "../models/Menu.model";
import z from "../utils/zod";

export const baseMenuSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageOne: z.string().url("Invalid image URL").optional(),
  imageTwo: z.string().url("Invalid image URL").optional(),
  price: z.number().positive("Price must be positive"),
  isSpecial: z.boolean().default(false),
  forCatering: z.boolean().default(false),
  isDrinks: z.boolean().default(false),
  forPub: z.boolean().default(false),
  forGrill: z.boolean().default(false),
  menuType: z.nativeEnum(MenuType).default(MenuType.MAIN),
  discountAmount: z.number().min(0, "Discount cannot be negative").default(0),
  discountDescription: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type baseMenuSchemaPaylaod = z.infer<typeof baseMenuSchema>;
