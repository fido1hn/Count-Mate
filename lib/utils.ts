import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import type { Payment } from "~/components/payments/columns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformTransaction(
  transaction: DBTransaction,
): UITransaction {
  const createdAt = new Date(transaction.created_at);
  return {
    amount: transaction.amount,
    payment_method: transaction.payment_type,
    date: format(createdAt, "yyyy-MM-dd"),
    time: format(createdAt, "HH:mm:ss"),
  };
}

type DBTransaction = {
  created_at: string;
  amount: number;
  payment_type: string;
};

export type UITransaction = {
  date: string;
  time: string;
  payment_method: string;
  amount: number;
};

export type TimePeriod = {
  from: string;
  to: string;
};
