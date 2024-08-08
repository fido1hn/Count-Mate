<template>
  <div class="flex h-screen justify-center">
    <SideBar class="hidden h-screen flex-none lg:flex" />
    <div class="flex-1 overflow-auto dark:border-gray-700 lg:border-l">
      <TopBar class="sticky top-0 z-20 backdrop-blur-md lg:hidden" />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup></script>
