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
      />
      <UButton label="3 months" color="gray" variant="ghost" />
      <UButton label="30 days" color="gray" variant="ghost" />
      <UButton label="7 days" color="gray" variant="ghost" />
    </UButtonGroup>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
