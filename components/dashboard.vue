<template>
  <div class="p-5">
    <h1 class="mb-4 text-3xl font-semibold">Dashboard</h1>
    <div>
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
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
