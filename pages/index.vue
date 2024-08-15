<template>
  <div>
    <div class="custom-box-background radial-gradient-background h-screen">
      <DesktopTopNavBar />

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
