<template>
  <div class="py-5">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { startOfDay, endOfDay } from "date-fns";
import { columns as originalColumns } from "./payments/columns";
import type { ColumnDef } from "@tanstack/vue-table";
import type { Payment } from "./payments/columns";
import DataTable from "./payments/DataTable.vue";
import { transformTransaction } from "~/lib/utils";

const supabase = useSupabaseClient();

const data = ref<Payment[]>([]);

const isMobile = ref(false);

// Check if the screen is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768; // Adjust this breakpoint as needed
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
    const mobileColumns = originalColumns.filter((col: ColumnDef<Payment>) => {
      if ("accessorKey" in col) {
        return col.accessorKey !== "date";
      }
      // Keep all other columns, including those without accessorKey
      return true;
    });

    return mobileColumns;
  }

  return originalColumns;
});

async function getData(): Promise<Payment[]> {
  // Fetch data from Supabase
  const today = new Date();
  const startOfToday = startOfDay(today).toISOString();
  const endOfToday = endOfDay(today).toISOString();

  const { data, error } = await supabase
    .from("transactions")
    .select()
    .gte("created_at", startOfToday)
    .lt("created_at", endOfToday);

  if (error) {
    console.log("Error fetching transactions:", error);
    return [];
  }

  return (data || []).map(transformTransaction);
}

onMounted(async () => {
  data.value = await getData();
});
</script>
