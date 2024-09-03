<template>
  <div class="h-dvh flex-col p-5">
    <div class="mb-4 flex items-center gap-3">
      <img
        src="/public/icon.png"
        alt="Untitled UI Logo"
        class="ml-1.5 h-8 w-8"
      />
      <h2 class="text-lg font-semibold max-[1360px]:hidden">Finace Tracker</h2>
    </div>

    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      class="mb-4"
      size="md"
      color="white"
      :trailing="false"
      placeholder="Search"
      :ui="{
        form: 'max-[1360px]:hidden',
        leading: { wrapper: 'max-[1360px]:block' },
      }"
    />

    <UVerticalNavigation
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
        label: 'max-[1360px]:hidden',
      }"
      class="mb-auto items-center"
    />

    <div class="flex gap-3">
      <UAvatar size="md" :src="avatarUrl" :alt="userFullName" />
      <div class="max-[1360px]:hidden">
        <p class="text-sm font-semibold">{{ userFullName }}</p>
        <p class="text-sm">{{ userEmailAddress }}</p>
      </div>
      <UButton
        icon="i-heroicons-arrow-right-on-rectangle-solid"
        size="xl"
        variant="ghost"
        @click="signOut"
        class="max-[1360px]:hidden"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const { userFullName, userEmailAddress } = useUserDetails();
const { avatarUrl } = useAvatarUrl();

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
      to: "/support",
    },
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
      to: "/settings",
    },
  ],
];

async function signOut() {
  await supabase.auth.signOut();
  return (window.location.href = "/");
}
</script>
