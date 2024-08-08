<template>
  <div class="flex items-center justify-between border-b px-5 py-2">
    <NuxtLink to="/" class="flex items-center gap-1">
      <img src="/icon.png" alt="Website Logo" class="h-10 w-10" />
      <span class="text-xl font-semibold">Finance Tracker</span>
    </NuxtLink>
    <div>
      <UButton
        variant="ghost"
        size="xl"
        icon="i-heroicons-bars-3-center-left-16-solid"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen">
        <UCard
          class="flex flex-1 flex-col"
          :ui="{
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
          <template #header>
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="absolute end-5 top-5 z-10 flex sm:hidden"
              square
              padded
              @click="isOpen = false"
            />

            <div class="flex items-center gap-3">
              <img
                src="/public/icon.png"
                alt="Untitled UI Logo"
                class="ml-1.5 h-8 w-8"
              />
              <h2 class="text-lg font-semibold">Finance Tracker</h2>
            </div>
          </template>

          <UVerticalNavigation
            @click="isOpen = false"
            :links="links"
            :ui="{
              padding: 'py-2',
              font: 'font-meduim',
              size: 'text-lg',
              base: 'gap-3',
              inactive: 'text-gray-700 dark:text-gray-300',
              icon: {
                inactive: 'text-gray-500',
                base: 'h-6 w-6',
              },
            }"
            class="items-center"
          />

          <template #footer>
            <div class="flex items-center justify-between">
              <div class="flex gap-4">
                <img
                  src="/public/evan.jpg"
                  alt="User Profile image"
                  class="h-12 w-12 rounded-full"
                />
                <div class="">
                  <p class="text-md font-semibold">Evan You</p>
                  <p class="text-sm">evan@financetracker.io</p>
                </div>
              </div>
              <UButton
                icon="i-heroicons-arrow-right-on-rectangle-solid"
                size="2xl"
                variant="ghost"
                :ui="{
                  icon: {
                    size: {
                      '2xl': 'h-8 w-8',
                    },
                  },
                }"
                @click="signOut"
              />
            </div>
          </template>
        </UCard>
      </USlideover>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
const supabase = useSupabaseClient();

const links = [
  [
    {
      label: "Home",
      icon: "i-solar-home-smile-linear",
      to: "/",
    },
    {
      label: "Dashboard",
      icon: "i-heroicons-chart-bar-square",
      to: "/dashboard",
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
      to: "/reports",
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

async function signOut() {
  await supabase.auth.signOut();
  return (window.location.href = "/");
}
</script>

<style></style>
