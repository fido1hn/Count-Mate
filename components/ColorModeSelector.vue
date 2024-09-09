<template>
  <UToggle
    on-icon="i-heroicons-moon-20-solid"
    off-icon="i-heroicons-sun-20-solid"
    v-model="isDarkMode"
    @change="toggleColorMode"
  />
</template>

<script lang="ts" setup>
// false = light, true = dark
const colorMode = useColorMode();

const isDarkMode = computed({
  get: () => colorMode.value === "dark",
  set: (value) => {
    colorMode.preference = value ? "dark" : "light";
  },
});

function toggleColorMode(value: boolean) {
  isDarkMode.value = value;
}
</script>

<style></style>
