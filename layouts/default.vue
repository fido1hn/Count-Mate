<template>
  <div class="flex h-screen">
    <SideBar class="h-lvh w-[280px] flex-none" />
    <main class="flex-1 overflow-auto border-l dark:border-gray-700">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
