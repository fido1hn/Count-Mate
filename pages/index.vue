<template>
  <div>
    <div class="custom-box-background radial-gradient-background h-screen">
      <DesktopTopNavBar />
      <section class="flex flex-col items-center">
        <div class="mt-16 flex max-w-7xl flex-col items-center justify-center">
          <h1 class="text-center text-5xl font-semibold">
            Beautiful analytics to grow smarter
          </h1>
          <p
            class="mt-4 w-3/4 text-center font-medium text-gray-500 dark:text-gray-400"
          >
            Powerful transactions recording and financial reports to help you
            understand your business metrics, gain an edge and never lose your
            records.
          </p>
          <div class="mt-6 flex items-center justify-center gap-3">
            <UButton
              label="Demo"
              icon="i-heroicons-play-circle"
              variant="solid"
              color="white"
              size="xl"
            />
            <UButton
              label="Sign up"
              variant="solid"
              color="primary"
              size="xl"
            />
          </div>
        </div>
        <div class="mt-16 flex justify-center">
          <img
            src="/public/macbook-pro.png"
            class="w-[535px]"
            alt="Macbook Pro Image of The Dashboard"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home",
});

definePageMeta({
  layout: false,
});
</script>
