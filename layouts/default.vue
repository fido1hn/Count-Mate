<template>
  <div class="container mx-auto max-w-4xl px-5">
    <AppHeader />
    <main class="my-10">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style>
/* Set the font family for the entire site */
body {
  font-family: "Inter";
}
/* Set the background color for the entire site */
body {
  @apply bg-white dark:bg-gray-900;
}
</style>
