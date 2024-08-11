<template>
  <div class="py-5">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { columns as originalColumns } from "./payments/columns";
import type { ColumnDef } from "@tanstack/vue-table";
import type { Payment } from "./payments/columns";
import DataTable from "./payments/DataTable.vue";

const data = ref<Payment[]>([]);

const isMobile = ref(false);

// Function to check if the screen is mobile
const checkMobile = () => {
  console.log("Ran checkMobile function now");
  isMobile.value = window.innerWidth < 768; // Adjust this breakpoint as needed
};

onMounted(() => {
  checkMobile(); // Initial check
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

// Compute columns based on screen size
const columns = computed(() => {
  console.log("Ran columns regeneration function");
  if (isMobile.value) {
    // Filter out the date column on mobile
    const mobileColumns = originalColumns.filter((col: ColumnDef<Payment>) => {
      if ("accessorKey" in col) {
        return col.accessorKey !== "date";
      }
      // Keep all other columns, including those without accessorKey
      return true;
    });

    console.log("Mobile Columns", mobileColumns);
    return mobileColumns;
  }

  return originalColumns;
});

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 9500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 10000,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "728ed52f",
      amount: 100000,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 1250,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "728ed52f",
      amount: 9500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 25000,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "728ed52f",
      amount: 70500,
      payment_method: "card",
      date: "2024-08-02T16:13:50.186Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    {
      id: "489e1d42",
      amount: 12500,
      payment_method: "transfer",
      date: "2024-08-02T16:16:05.571Z",
      time: "2024-08-02T16:13:50.186Z",
    },
    // ...
  ];
}

onMounted(async () => {
  data.value = await getData();
});
</script>
