<template>
  <section class="px-5 pb-16 lg:px-28 lg:pb-24">
    <div class="flex flex-col gap-5 md:flex-row md:justify-between">
      <div>
        <div class="mb-5 flex items-center gap-1.5 pl-0 md:mb-3 md:pl-2">
          <img src="/icon.png" alt="Website Logo" class="h-8 w-8" />
          <p class="w-full text-lg font-semibold">Finance Tracker</p>
        </div>

        <UHorizontalNavigation
          :links="links"
          :ui="{
            wrapper: 'md:w-fit',
            container: 'grid grid-cols-2 w-full md:flex md:gap-4',
            base: 'font-semibold py-3 md:py-3.5',
            inactive: 'text-gray-700',
          }"
        />
      </div>

      <div class="flex flex-col gap-5 md:justify-between">
        <p class="mt-2 text-base font-semibold">Stay up to date</p>
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
          <UInput placeholder="Enter your email" size="md" />
          <UButton
            label="Subscribe"
            size="md"
            :ui="{ base: 'justify-center' }"
          />
        </div>
      </div>
    </div>

    <UDivider class="my-12" />

    <div
      class="flex flex-col items-center gap-5 md:flex-row md:justify-between"
    >
      <p class="text-sm text-gray-600 dark:text-gray-400">
        &copy; 2024 Finance Tracker. All rights reserved
      </p>

      <div class="flex items-center gap-4">
        <UIcon name="i-fa6-brands-x-twitter" class="h-5 w-5 text-gray-500" />
        <UIcon
          name="i-akar-icons-linkedin-v1-fill"
          class="h-5 w-5 text-gray-500"
        />
        <UIcon name="i-fa6-brands-github" class="h-5 w-5 text-gray-500" />
        <UIcon name="i-fa6-brands-meta" class="h-5 w-5 text-gray-500" />
        <UIcon name="i-fa6-brands-dribbble" class="h-5 w-5 text-gray-500" />
        <UIcon name="i-fa6-brands-angellist" class="h-5 w-5 text-gray-500" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Overview",
  },
  {
    label: "Features",
  },
  {
    label: "Pricing",
  },
  {
    label: "Careers",
  },
  {
    label: "Help",
  },
  {
    label: "Privacy",
    to: "/privacy",
  },
];
</script>

<style></style>
