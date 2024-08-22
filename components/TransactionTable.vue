<template>
  <div class="py-5">
    <UTable :columns="columns" :rows="rows">
      <template #date-data="{ row }">
        <span>{{ formatDate(row.date) }}</span>
      </template>

      <template #time-data="{ row }">
        <span>{{ formatTime(row.time) }}</span>
      </template>

      <template #payment_method-data="{ row }">
        <div class="flex items-center gap-1">
          <UIcon :name="chooseIcon(row.payment_method)" class="h-4 w-4" />
          <span class="block">{{ row.payment_method }}</span>
        </div>
      </template>

      <template #amount-data="{ row }">
        <span>{{ formatAmount(row.amount) }}</span>
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="actionItems(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>

    <div
      class="flex justify-end border-t border-gray-200 px-3 py-3.5 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="rowCount"
        :total="transactions.length"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UITransaction } from "~/lib/utils";
const transactionsStore = useTransactionsStore();
const { transactions } = storeToRefs(transactionsStore);

const originalColumns = [
  {
    key: "date",
    label: "Date",
  },
  {
    key: "time",
    label: "Time",
  },
  {
    key: "payment_method",
    label: "Payed With",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "actions",
  },
];

const page = ref(1);
const rowCount = 10;

const rows = computed(() => {
  return transactions.value.slice(
    (page.value - 1) * rowCount,
    page.value * rowCount,
  );
});

const actionItems = (row: UITransaction) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

function formatAmount(amount: number) {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
  return formattedAmount;
}

function chooseIcon(payment_method: string) {
  return payment_method === "Transfer"
    ? "i-solar-transfer-horizontal-linear"
    : "i-heroicons-credit-card";
}

function formatTime(timestring: string) {
  const hours = parseInt(timestring.split(":")[0]);
  const minutes = timestring.split(":")[1];
  const period = hours < 12 ? "am" : "pm";
  const formattedHours = (hours % 12 || 12).toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  return formattedTime;
}

function formatDate(datestring: string) {
  const date = new Date(datestring);
  const formattedDate = date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
}

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768; // breakpoint
};

onMounted(() => {
  checkMobile(); // Initial check
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const columns = computed(() => {
  /*
  Compute columns based on screen size
  */
  if (isMobile.value) {
    // Filter out the date column on mobile
    const mobileColumns = originalColumns.filter((col) => {
      return col.key !== "date";
    });

    return mobileColumns;
  }

  return originalColumns;
});
</script>
