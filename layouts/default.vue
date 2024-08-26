<template>
  <div class="flex h-screen">
    <SideNavBar class="hidden h-screen flex-none lg:flex" />
    <div class="flex-1 dark:border-gray-700 lg:overflow-auto lg:border-l">
      <MobileTopNavBar class="sticky top-0 z-20 backdrop-blur-md lg:hidden" />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup></script>
