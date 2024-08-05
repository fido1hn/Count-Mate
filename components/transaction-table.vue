<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "./payments/columns";
import type { Payment } from "./payments/columns";
import DataTable from "./payments/data-table.vue";

const data = ref<Payment[]>([]);

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 9500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 10000,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "728ed52f",
      amount: 100000,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 1250,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "728ed52f",
      amount: 9500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 25000,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "728ed52f",
      amount: 70500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
    },
    // ...
  ];
}

onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <div class="container mx-auto py-5">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>
