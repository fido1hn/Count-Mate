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
              color="primary"
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
            v-if="isLoggedIn"
            @click="isOpen = false"
            :links="loggedInLinks"
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

          <UVerticalNavigation
            v-else
            @click="isOpen = false"
            :links="loggedOutLinks"
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

          <template #footer v-if="isLoggedIn">
            <div class="flex items-center justify-between">
              <div class="flex gap-4">
                <UAvatar size="md" :src="avatarUrl" :alt="userFullName" />
                <div class="">
                  <p class="text-md font-semibold">{{ userFullName }}</p>
                  <p class="text-sm">{{ userEmailAddress }}</p>
                </div>
              </div>
              <UButton
                icon="i-heroicons-arrow-right-on-rectangle-solid"
                size="xl"
                variant="ghost"
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
const user = useSupabaseUser();
const { userFullName, userEmailAddress } = useUserDetails();
const { avatarUrl } = useAvatarUrl();

const isLoggedIn = computed(() => !!user.value);

const loggedInLinks = [
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
      to: "/settings",
    },
  ],
];

const loggedOutLinks = [
  [
    {
      label: "Login",
      icon: "i-heroicons-arrow-left-on-rectangle-20-solid",
      to: "/login",
    },
    {
      label: "Sign Up",
      icon: "i-heroicons-user-plus",
      to: "/signup",
    },
  ],
];

async function signOut() {
  await supabase.auth.signOut();
  return (window.location.href = "/");
}
</script>

<style></style>
