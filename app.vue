<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - Finance Tracker",
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    { name: "author", content: "Confidence Ekeanya - Web Developer" },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],
});

useSeoMeta({
  title: "Finance Tracker - POS Tracking & Accounting",
  ogTitle: "POS Tracking & Accounting",
  description:
    "POS transaction tracking & accounting application, for POS agents to keep track of transactions on the go, get financial reports and chat with A.I.",
  ogDescription:
    "POS transaction tracking & accounting application, for POS agents to keep track of transactions on the go, get financial reports and chat with A.I.",
  ogImage: "/icon.png",
  twitterCard: "/icon.png",
});
</script>

<style>
/* Set the font family for the entire site */
body {
  font-family: "Inter";
}
/* Set the background color for the entire site */
body {
  @apply bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200;
}
/*
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  select,
  textarea,
  input {
    font-size: 16px !important;
  }
} */
</style>
