<template>
  <div class="flex flex-col">
    <div class="mb-2 flex items-center justify-between">
      <h3 class="font-semibold">Activity</h3>
      <p class="font-medium text-gray-600 dark:text-gray-400">View all</p>
    </div>
    <div class="space-y-3">
      <ActivityItem
        v-for="item in items"
        :name="item.name"
        :image="item.image"
        :product="item.product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    name: "Demi Wikinson",
    product: "Webflow 101",
    image: "user-1_h6toci.jpg",
  },
  {
    name: "Aliah Lane",
    product: "SEO Masterclass",
    image: "user-7_yhluwy.jpg",
  },
  {
    name: "Lana Steiner",
    product: "Figma Mockups",
    image: "user-5_iywynh.jpg",
  },
  {
    name: "Candice Wu",
    product: "Webflow 101",
    image: "user-3_khlxi9.jpg",
  },
  {
    name: "Ava Wright",
    product: "SEO Masterclass",
    image: "user-4_hzl6tt.jpg",
  },
  {
    name: "Koray Okumus",
    product: "SEO Masterclass",
    image: "user-12_oit7uw.jpg",
  },
  {
    name: "Andi Lane",
    product: "The Ultimate Guide To Backlinks",
    image: "user-8_hzl42x.jpg",
  },
  {
    name: "Drew Cano",
    product: "The Figma Dashboard Bundle",
    image: "user-13_iilzdd.jpg",
  },
  {
    name: "Zahir Mays",
    product: "The Figma Dashboard Bundle",
    image: "user-2_wvspam.jpg",
  },
  {
    name: "Rene Wells",
    product: "The Design Handbook",
    image: "user-14_jpa2r9.jpg",
  },
  {
    name: "Joshua Wilson",
    product: "iPhone 13 Mockups",
    image: "user-10_cvtddl.jpg",
  },
  {
    name: "Lori Bryson",
    product: "SEO Masterclass",
    image: "user-9_htdmrr.jpg",
  },
  {
    name: "Loki Bright",
    product: "Figma Mockups",
    image: "user-6_rl5mvv.jpg",
  },
  {
    name: "Anita Cruz",
    product: "The Ultimate Guide To Backlinks",
    image: "user-11_kt7em9.jpg",
  },
];
</script>

<style></style>
