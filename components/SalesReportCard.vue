<template>
  <div class="rounded-lg border border-gray-300 p-5 dark:border-gray-700">
    <div class="mb-3 flex items-center justify-between">
      <h3 class="text-lg font-semibold">Sales Report</h3>
      <UButton label="View Report" color="white" />
    </div>

    <UButtonGroup
      size="md"
      orientation="horizontal"
      :ui="{ rouded: 'rounded-lg' }"
    >
      <UButton
        label="12 months"
        color="gray"
        variant="ghost"
        activeClass="active"
        class="hidden lg:block"
      />
      <UButton label="3 months" color="gray" variant="ghost" />
      <UButton label="30 days" color="gray" variant="ghost" />
      <UButton label="7 days" color="gray" variant="ghost" />
    </UButtonGroup>

    <BarChart
      index="name"
      :data="data"
      :categories="['total', 'predicted']"
      :y-formatter="
        (tick, i) => {
          return typeof tick === 'number'
            ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
            : '';
        }
      "
      :rounded-corners="7"
      :type="'stacked'"
      :colors="['#845ED7', '#333741']"
    />
  </div>
</template>

<script lang="ts" setup>
import { BarChart } from "@/components/ui/chart-bar";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];
</script>

<style></style>
