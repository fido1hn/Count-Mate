import { z } from "zod";

export const PersonalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .optional(),
  lastName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .optional(),
  email: z.string().email("Invalid email address").optional(),
});
