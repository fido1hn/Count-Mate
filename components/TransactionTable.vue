<template>
  <div class="py-5">
    <DataTable :columns="columns" :data="props.data" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { columns as originalColumns } from "./payments/columns";
import type { ColumnDef } from "@tanstack/vue-table";
import type { Payment } from "./payments/columns";
import DataTable from "./payments/DataTable.vue";

const props = defineProps(["data"]);

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
</script>
