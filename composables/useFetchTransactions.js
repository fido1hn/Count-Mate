import { transformTransaction } from "~/lib/utils";

export const useFetchTransactions = (period) => {
  const supabase = useSupabaseClient();
  const transactions = ref([]);
  const pending = ref(false);

  const transactionCount = computed(() => transactions.value.length);

  const transactionTotal = computed(() =>
    transactions.value.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    ),
  );

  const fetchTransactions = async () => {
    pending.value = true;
    try {
      const { data } = await useAsyncData("", async () => {
        const { data, error } = await supabase
          .from("transactions")
          .select()
          .gte("created_at", period.from)
          .lte("created_at", period.to)
          .order("created_at", { ascending: false });
        if (error) return [];
        return data;
      });
      return data.value.map(transformTransaction);
    } finally {
      pending.value = false;
    }
  };

  const refresh = async () => (transactions.value = await fetchTransactions());

  return {
    transactions,
    transactionTotal,
    transactionCount,
    refresh,
    pending,
  };
};
