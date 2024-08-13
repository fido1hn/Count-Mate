<template>
  <div class="mx-auto flex max-w-7xl items-center px-4 py-3">
    <ULink
      to="/"
      active-class=""
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      class="w-56"
    >
      <div class="flex items-center gap-1.5">
        <img src="/icon.png" alt="Website Logo" class="h-8 w-8" />
        <p class="w-full text-lg font-semibold">Finance Tracker</p>
      </div>
    </ULink>
    <UHorizontalNavigation
      :links="links"
      class="mr-auto"
      :ui="{
        wrapper: 'w-fit',
        container: 'gap-4',
        base: 'font-semibold',
        inactive: 'text-gray-700',
      }"
    />
    <div class="flex items-center justify-center gap-4">
      <UButton color="gray" variant="ghost" size="md" label="Log in" />
      <UButton color="primary" variant="solid" size="md" label="Sign up" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Home",
  },
  {
    label: "Products",
  },
  {
    label: "Resources",
  },
  {
    label: "Pricing",
  },
];
</script>

<style></style>
