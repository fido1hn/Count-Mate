<template>
  <div class="py-5">
    <UTable :columns="columns" :rows="transactions">
      <template #date-data="{ row }">
        <span>{{ formatDate(row.date) }}</span>
      </template>

      <template #time-data="{ row }">
        <span>{{ formatTime(row.time) }}</span>
      </template>

      <template #payed_with-data="{ row }">
        <div class="flex items-center gap-1">
          <UIcon :name="chooseIcon(row.payed_with)" class="h-4 w-4" />
          <span class="block">{{ row.payed_with }}</span>
        </div>
      </template>

      <template #amount-data="{ row }">
        <span>{{ formatAmount(row.amount) }}</span>
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>
  </div>
</template>

<script lang="ts" setup>
type Transaction = {
  date: string;
  time: string;
  payed_with: string;
  amount: number;
};

const columns = [
  {
    key: "time",
    label: "Time",
  },
  {
    key: "payed_with",
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

const transactions = [
  {
    date: "2024-08-21",
    time: "12:50:35",
    payed_with: "Card",
    amount: 4500,
  },
  {
    date: "2024-08-21",
    time: "06:32:25",
    payed_with: "Transfer",
    amount: 4500,
  },
  {
    date: "2024-08-21",
    time: "06:32:25",
    payed_with: "Card",
    amount: 4500,
  },
  {
    date: "2024-08-21",
    time: "06:32:25",
    payed_with: "Transfer",
    amount: 4500,
  },
  {
    date: "2024-08-21",
    time: "06:32:25",
    payed_with: "Card",
    amount: 4500,
  },
  {
    date: "2024-08-21",
    time: "06:32:25",
    payed_with: "Card",
    amount: 4500,
  },
];

const items = (row: Transaction) => [
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

function chooseIcon(payed_with: string) {
  return payed_with === "Transfer"
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
</script>
