<template>
  <div class="p-6">
    <h1 class="mb-4 text-3xl font-semibold">Dashboard</h1>

    <div class="flex items-center justify-between">
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

    <ChartComponent />
  </div>
</template>

<script lang="js" setup>
import { format } from "date-fns";

const date = ref(new Date());

function changeDate(date) {
  console.log(date);
}
</script>

<style></style>
