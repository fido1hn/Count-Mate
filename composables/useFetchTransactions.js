export const useFetchTransactions = (period) => {
  const supabase = useSupabaseClient();
  const transactions = ref([]);
  const pending = ref(false);

  const transactionCount = computed(() => income.value.length);

  const transactionTotal = computed(() =>
    income.value.reduce((sum, transaction) => sum + transaction.amount, 0),
  );

  const fetchTransactions = async () => {
    pending.value = true;
    try {
      const { data } = await useAsyncData(
        `transactions-${period.value.from.toDateString()}-${period.value.to.toDateString()}`,
        async () => {
          const { data, error } = await supabase
            .from("transactions")
            .select()
            .gte("created_at", period.value.from.toISOString())
            .lte("created_at", period.value.to.toISOString())
            .order("created_at", { ascending: false });
          if (error) return [];
          return data;
        },
      );
      return data.value;
    } finally {
      pending.value = false;
    }
  };

  const refresh = async () => (transactions.value = await fetchTransactions());

  // Bug: Maximum recursive updates exceeded.
  // watch(period, async () => {
  //   transactions.value = await refresh();
  // });

  return {
    transactions: {
      all: transactions,
      income,
      incomeTotal,
      incomeCount,
    },
    refresh,
    pending,
  };
};
