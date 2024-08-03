<template>
  <div class="flex h-screen flex-col p-5">
    <div class="mb-4 flex items-center gap-3">
      <img src="/public/icon.png" alt="Untitled UI Logo" class="h-8 w-8" />
      <h2 class="text-lg font-semibold">Finace Tracker</h2>
    </div>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      class="mb-4"
      size="md"
      color="white"
      :trailing="false"
      placeholder="Search"
    />
    <UVerticalNavigation
      :links="links"
      :ui="{
        padding: 'py-2',
        font: 'font-meduim',
        size: 'text-lg',
        base: 'gap-3',
        inactive: 'text-gray-600 dark:text-gray-300',
        icon: {
          inactive: 'text-gray-500',
          base: 'h-6 w-6',
        },
      }"
      class="mb-auto items-center"
    />
    <div class="flex gap-3">
      <img
        src="/public/evan.jpg"
        alt="User Profile image"
        class="h-10 w-10 rounded-full"
      />
      <div>
        <p class="text-sm font-semibold">Evan You</p>
        <p class="text-sm">evan@financetracker.io</p>
      </div>
      <UIcon
        name="i-heroicons-arrow-right-on-rectangle-solid"
        class="h-6 w-6"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  [
    {
      label: "Home",
      icon: "i-solar-home-smile-linear",
      to: "",
    },
    {
      label: "Dashboard",
      icon: "i-heroicons-chart-bar-square",
      to: "",
    },
    {
      label: "Projects",
      icon: "i-solar-layers-minimalistic-outline",
      to: "",
    },
    {
      label: "Tasks",
      icon: "i-heroicons-clipboard-document-check",
      to: "",
    },
    {
      label: "Reporting",
      icon: "i-heroicons-chart-pie",
      to: "",
    },
    {
      label: "Users",
      icon: "i-heroicons-users",
      to: "",
    },
  ],
  [
    {
      label: "Support",
      icon: "i-heroicons-lifebuoy",
    },
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
    },
  ],
];
</script>
