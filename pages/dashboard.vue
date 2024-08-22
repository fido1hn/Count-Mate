<template>
  <div class="w-full p-6">
    <section class="mb-7">
      <h1 class="mb-1 text-3xl font-semibold">Dashboard</h1>
      <p class="mb-6 text-gray-600 dark:text-gray-400">
        Your current sales summary and activity
      </p>

      <div class="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0">
        <UButtonGroup
          size="md"
          orientation="horizontal"
          :ui="{ rouded: 'rounded-lg' }"
        >
          <UButton label="Default" color="white" activeClass="active" />
          <UButton
            icon="i-radix-icons-dot-filled"
            :trailing="false"
            label="Saved view"
            color="white"
          />
          <UButton label="SDR view" color="white" />
          <UButton icon="i-radix-icons-plus" color="white" />
        </UButtonGroup>

        <div class="flex gap-2">
          <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton
              color="white"
              size="md"
              icon="i-heroicons-calendar-days-20-solid"
              :label="format(date, 'd MMM, yyy')"
            />
            <template #panel="{ close }">
              <DatePicker
                v-model="date"
                :model-value="date.value"
                is-required
                @close="close"
              />
            </template>
          </UPopover>
          <UButton
            icon="i-solar-list-outline"
            size="md"
            color="white"
            variant="solid"
            label="Filters"
            :trailing="false"
          />
        </div>
      </div>
    </section>

    <section
      class="grid grid-cols-1 gap-y-9 lg:grid-cols-4 lg:grid-rows-[7rem_auto_auto] lg:gap-x-5"
    >
      <div
        class="flex flex-col gap-5 lg:col-span-3 lg:flex-row lg:justify-between lg:gap-0"
      >
        <div
          class="min-w-60 rounded-lg border border-gray-300 p-5 dark:border-gray-700"
        >
          <div class="mb-3 flex justify-between">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
              Today's revenue
            </p>
            <UIcon
              name="i-radix-icons-dots-vertical"
              class="text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="flex items-center justify-between gap-3">
            <p class="text-3xl font-semibold">{{ totalAmountToday }}</p>
            <div
              class="flex items-center rounded-full border border-green-300 bg-green-100 px-1 dark:border-green-700 dark:bg-green-900"
            >
              <UIcon
                name="i-heroicons-arrow-small-up-20-solid"
                class="h-5 w-5 text-green-600 dark:text-green-300"
              />
              <span
                class="pr-1 text-sm font-semibold text-green-700 dark:text-green-200"
                >10%</span
              >
            </div>
          </div>
        </div>

        <div
          class="min-w-36 rounded-lg border border-gray-300 p-5 dark:border-gray-700"
        >
          <div class="mb-3 flex justify-between">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
              Today's orders
            </p>
            <UIcon
              name="i-radix-icons-dots-vertical"
              class="text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="flex items-center justify-between gap-3">
            <p class="text-3xl font-semibold">{{ transactionCount }}</p>
            <div
              class="flex items-center rounded-full border border-green-300 bg-green-100 px-1 dark:border-green-700 dark:bg-green-900"
            >
              <UIcon
                name="i-heroicons-arrow-small-up-20-solid"
                class="h-5 w-5 text-green-600 dark:text-green-300"
              />
              <span
                class="pr-1 text-sm font-semibold text-green-700 dark:text-green-200"
                >12%</span
              >
            </div>
          </div>
        </div>

        <div
          class="min-w-60 rounded-lg border border-gray-300 p-5 dark:border-gray-700"
        >
          <div class="mb-3 flex justify-between">
            <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
              Avg. order value
            </p>
            <UIcon
              name="i-radix-icons-dots-vertical"
              class="text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="flex items-center justify-between gap-3">
            <p class="text-3xl font-semibold">₦115,000</p>
            <div
              class="flex items-center rounded-full border border-red-300 bg-red-100 px-1 dark:border-red-700 dark:bg-red-900"
            >
              <UIcon
                name="i-heroicons-arrow-small-down-20-solid"
                class="h-5 w-5 text-red-600 dark:text-red-300"
              />
              <span
                class="pr-1 text-sm font-semibold text-red-700 dark:text-red-200"
                >2%</span
              >
            </div>
          </div>
        </div>
      </div>

      <ActivityBar class="row-span-3 hidden px-4 lg:block" />
      <SalesReportCard class="col-span-3" />

      <div class="col-span-3">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Transaction History</h2>
          <TransactionModal v-model="isOpen" @saved="refresh" />
          <UButton
            icon="i-heroicons-plus-circle"
            color="violet"
            size="md"
            variant="solid"
            label="Add New"
            @click="isOpen = true"
          />
        </div>
        <TransactionTable />
      </div>
    </section>
  </div>
</template>

<script lang="js" setup>
import { format, startOfDay, endOfDay } from "date-fns";

useHead({
  title: "Dashboard",
});

const today = new Date();
const startOfToday = startOfDay(today).toISOString();
const endOfToday = endOfDay(today).toISOString();

const todayTimeRange = {
  from: startOfToday,
  to: endOfToday,
};

const transactionsStore = useTransactionsStore();
await transactionsStore.fetchTransactions(todayTimeRange);
const { transactionCount, transactionTotal } = storeToRefs(transactionsStore);

const totalAmountToday = computed(() => {
  const formattedAmount = useCurrency(transactionTotal.value);
  return formattedAmount;
});

function refresh() {
  transactionsStore.refresh(todayTimeRange);
}

const date = ref(new Date());
const isOpen = ref(false);
</script>
