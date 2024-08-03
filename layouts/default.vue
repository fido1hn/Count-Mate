<template>
  <div class="flex h-dvh">
    <SideBar class="h-dvh flex-none" />
    <main class="flex-1 overflow-auto border-l dark:border-gray-700">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
