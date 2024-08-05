<template>
  <div class="w-full p-6">
    <h1 class="mb-5 text-3xl font-semibold">Dashboard</h1>

    <div class="mb-5 flex items-center justify-between">
      <UButtonGroup
        size="md"
        orientation="horizontal"
        :ui="{ rouded: 'rounded-lg' }"
      >
        <UButton label="12 Months" color="white" activeClass="active" />
        <UButton label="30 days" color="white" />
        <UButton label="7 days" color="white" />
        <UButton label="24 hours" color="white" />
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

    <div class="mb-9 flex items-start justify-between">
      <div class="flex items-start gap-5">
        <div>
          <p class="mb-1 text-sm text-gray-600 dark:text-gray-400">MRR</p>
          <div class="flex items-start">
            <span class="mr-1">$</span>
            <p class="mr-1.5 text-3xl font-medium">18,800</p>
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-solid-arrow-trending-up"
                class="mr-1 h-5 w-5 text-green-500"
              />
              <p class="text-green-600">7.4%</p>
            </div>
          </div>
        </div>
        <AreaChart
          class="h-[200px] w-[750px]"
          index="name"
          :colors="['purple', 'violet']"
          :show-gradiant="true"
          :data="data"
          :categories="['total']"
          :show-grid-line="true"
          :show-legend="false"
          :show-x-axis="true"
          :show-y-axis="false"
        />
      </div>

      <div class="flex flex-col gap-y-3 pr-24">
        <div class="">
          <p class="mb-1.5 text-xs text-gray-600 dark:text-gray-400">
            Total Members
          </p>
          <div class="flex items-start">
            <p class="mr-1 text-2xl font-medium">4,862</p>
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-solid-arrow-trending-up"
                class="mr-1 h-5 w-5 text-green-500"
              />
              <p class="text-green-600">7.4%</p>
            </div>
          </div>
        </div>

        <div class="">
          <p class="mb-1.5 text-xs text-gray-600 dark:text-gray-400">
            Paid Members
          </p>
          <div class="flex items-start">
            <p class="mr-1 text-2xl font-medium">2,672</p>
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-solid-arrow-trending-up"
                class="mr-1 h-5 w-5 text-green-500"
              />
              <p class="text-green-600">6.6%</p>
            </div>
          </div>
        </div>

        <div class="">
          <p class="mb-1.5 text-xs text-gray-600 dark:text-gray-400">
            Email open rate
          </p>
          <div class="flex items-start">
            <p class="mr-1 text-2xl font-medium">82%</p>
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-solid-arrow-trending-up"
                class="mr-1 h-5 w-5 text-green-500"
              />
              <p class="text-green-600">8.1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="">
      <h2 class="text-xl font-semibold">Transaction History</h2>
      <TransactionTable />
    </section>
  </div>
</template>

<script lang="js" setup>
import { AreaChart } from "@/components/ui/chart-area";
import { format } from "date-fns";

const date = ref(new Date());

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 2000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 2000) + 1000 },
];
</script>

<style></style>
