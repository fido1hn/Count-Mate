<template>
  <div class="min-h-screen max-w-full">
    <div class="grid grid-cols-[280px_auto]">
      <SideBar />
      <main class="border-l dark:border-gray-700">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup></script>
