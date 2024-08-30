import { defineStore } from "pinia";
import { transformTransaction } from "~/lib/utils";
import type { TimePeriod, UITransaction } from "~/lib/utils";

export const useTransactionsStore = defineStore({
  id: "transactionsStore",
  state: () => ({
    transactions: [] as UITransaction[],
    pending: false,
  }),
  actions: {
    async fetchTransactions(period: TimePeriod) {
      this.pending = true;
      try {
        const supabase = useSupabaseClient();
        const { data, error } = await supabase
          .from("transactions")
          .select()
          .gte("created_at", period.from)
          .lte("created_at", period.to)
          .order("created_at", { ascending: false });
        if (error) {
          this.transactions = [];
        } else {
          this.transactions = data.map(transformTransaction);
        }
      } finally {
        this.pending = false;
      }
    },
    async refresh(period: TimePeriod) {
      await this.fetchTransactions(period);
    },
  },
  getters: {
    transactionCount: (state) => state.transactions.length,
    transactionTotal: (state) =>
      state.transactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0,
      ),
    transactionAverage(): number {
      return this.transactionCount > 0
        ? this.transactionTotal / this.transactionCount
        : 0;
    },
  },
});
