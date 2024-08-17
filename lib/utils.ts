import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import type { Payment } from "~/components/payments/columns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformTransaction(transaction: any): Payment {
  const createdAt = new Date(transaction.created_at);
  return {
    id: transaction.id,
    amount: transaction.amount,
    payment_method: transaction.payment_type,
    date: format(createdAt, "yyyy-MM-dd"),
    time: format(createdAt, "HH:mm:ss"),
  };
}
