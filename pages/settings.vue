<template>
  <div>
    <div class="gradient-background h-40 w-full md:h-60"></div>
    <div
      class="border-1 -mt-16 flex flex-col gap-3 border-green-500 p-5 md:-mt-12 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <UAvatar
          :src="avatarUrl"
          :alt="userFullName"
          size="3xl"
          class="ring ring-white"
          :ui="{ size: { '3xl': 'w-24 h-24 md:w-40 md:h-40' } }"
        >
          <UIcon
            name="i-fluent-checkmark-starburst-16-filled"
            class="absolute bottom-1 right-1 text-blue-500"
          />
        </UAvatar>
        <div>
          <h2
            class="text-2xl font-semibold text-black dark:text-white md:text-3xl"
          >
            {{ userFullName }}
          </h2>
          <p class="text-xs font-normal text-gray-500 md:text-base">
            {{ userEmailAddress }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <UButton
          label="Share"
          size="sm"
          variant="outline"
          color="white"
          icon="i-tabler-user-plus"
          :ui="{
            rounded: 'rounded-lg',
            variant: { outline: 'ring-gray-300 dark:ring-gray-700' },
          }"
        />
        <UButton
          label="View Profile"
          size="sm"
          variant="solid"
          :ui="{ rounded: 'rounded-lg' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { userFullName, userEmailAddress } = useUserDetails();
const { avatarUrl } = useAvatarUrl();
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(
    140deg,
    #981ee3,
    #b74bfe 10% 55%,
    #f79b76 70%,
    #fde579 90%
  );
}
@media (max-width: 630px) {
  .gradient-background {
    background: linear-gradient(140deg, #b74bfe 50%, #f79b76 70%);
  }
}
</style>
