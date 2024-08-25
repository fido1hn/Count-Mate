import { z } from "zod";

export const PersonalInfoSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  email: z.string().email(),
});
