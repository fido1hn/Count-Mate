<template>
  <div>
    <section class="px-28 pb-24">
      <div class="flex justify-between">
        <div>
          <div class="mb-3 flex items-center gap-1.5 pl-2">
            <img src="/icon.png" alt="Website Logo" class="h-8 w-8" />
            <p class="w-full text-lg font-semibold">Finance Tracker</p>
          </div>

          <UHorizontalNavigation
            :links="links"
            :ui="{
              wrapper: 'w-fit',
              container: 'gap-4',
              base: 'font-semibold',
              inactive: 'text-gray-700',
            }"
          />
        </div>

        <div class="flex flex-col justify-between">
          <p class="mt-2 text-base font-semibold">Stay up to date</p>
          <div class="flex items-center gap-4">
            <UInput placeholder="Enter your email" size="sm" />
            <UButton label="Subscribe" size="sm" />
          </div>
        </div>
      </div>

      <UDivider class="my-12" />

      <div class="flex items-center justify-between">
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
  </div>
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
  },
];
</script>

<style></style>
