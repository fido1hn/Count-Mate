import { z } from "zod";

export const TransactionSchema = z.object({
  payment_type: z.string(),
  created_at: z.string(),
  amount: z.number().positive("Amount needs to be more than 0"),
});
