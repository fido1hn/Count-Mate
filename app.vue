<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
/* Set the font family for the entire site */
body {
  font-family: "Inter";
}
/* Set the background color for the entire site */
body {
  @apply bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200;
}
</style>
