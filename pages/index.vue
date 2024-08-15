<template>
  <div>
    <MobileTopNavBar class="sticky top-0 z-20 backdrop-blur-md lg:hidden" />
    <div class="custom-box-background radial-gradient-background h-svh">
      <DesktopTopNavBar class="hidden lg:flex" />

      <HeroSection />
    </div>

    <FeaturedInSection />

    <div class="container">
      <UDivider />
    </div>

    <FeaturesSection />

    <TestimonialSection />

    <FaqSection />

    <FooterSection />
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
