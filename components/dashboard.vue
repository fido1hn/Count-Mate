<template>
  <div class="p-6">
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

    <div class="flex items-start justify-between">
      <div class="flex items-start gap-8">
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
        <LineChart />
        <!-- <h1>Hello world</h1> -->
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
  </div>
</template>

<script lang="js" setup>
import { format } from "date-fns";

const date = ref(new Date());
</script>

<style></style>
