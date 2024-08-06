<template>
  <div class="flex items-start gap-3">
    <NuxtImg
      provider="cloudinary"
      :src="image"
      width="34"
      height="34"
      fill="inside"
      :modifiers="{ roundCorner: 'max' }"
    />

    <div class="flex flex-col">
      <p class="text-base font-medium">{{ name }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Purchased
        <span class="font-medium text-primary">{{ product }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["name", "image", "product"]);
</script>
