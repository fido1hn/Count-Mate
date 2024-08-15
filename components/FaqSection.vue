<template>
  <div>
    <section class="space-y-14 p-28">
      <div class="text-center">
        <h4 class="mb-4 text-3xl font-semibold">Frequently asked questions</h4>
        <p class="text-gray-600 dark:text-gray-400">
          Everything you need to know about the product and billing
        </p>
      </div>

      <div class="container mx-auto max-w-3xl">
        <UAccordion
          :items="items"
          color="white"
          :ui="{
            item: {
              base: 'px-3 border-b border-gray-200 dark:border-gray-700',
            },
          }"
        >
          <template #default="{ item, index, open }">
            <UButton
              color="white"
              variant="ghost"
              :ui="{ padding: { sm: 'py-4' } }"
            >
              <span
                class="truncate text-base text-gray-700 dark:text-gray-300"
                >{{ item.label }}</span
              >

              <template #trailing>
                <div class="ms-auto transition-opacity duration-200">
                  <UIcon
                    v-if="!open"
                    name="i-heroicons-plus-circle"
                    class="h-5 w-5"
                  />
                  <UIcon
                    v-else
                    name="i-heroicons-minus-circle"
                    class="h-5 w-5"
                  />
                </div>
              </template>
            </UButton>
          </template>
        </UAccordion>
      </div>

      <div
        class="flex flex-col items-center rounded-2xl bg-[#F9FAFB] p-10 dark:bg-[#161B26]"
      >
        <div class="mb-6 flex items-end">
          <NuxtImg
            provider="cloudinary"
            src="user-12_oit7uw.jpg"
            width="48"
            :modifiers="{ roundCorner: 'max' }"
            class="-mr-3"
          />
          <NuxtImg
            provider="cloudinary"
            src="user-1_h6toci.jpg"
            width="56"
            :modifiers="{ roundCorner: 'max' }"
            class="z-20 rounded-full border-2 border-white"
          />
          <NuxtImg
            provider="cloudinary"
            src="user-11_kt7em9.jpg"
            width="48"
            :modifiers="{ roundCorner: 'max' }"
            class="-ml-3"
          />
        </div>

        <p class="mb-4 text-lg font-semibold">Still have questions ?</p>
        <p class="mb-7 text-gray-600 dark:text-gray-400">
          Can't find the answer you're looking for? Please chat our friendly
          team.
        </p>

        <UButton label="Get in touch" size="xl" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    label: "Is there a free trial available ?",
    content:
      "Yes, you can use Finance tracker for as long as you wish for free.",
    defaultOpen: true,
  },
  {
    label: "Can i change my plan later ?",
    content:
      "Yes, you can. We offer a premium plan with more features to help understand your business finances.",
  },
  {
    label: "What is your cancellation policy ?",
    content:
      "You are free to cancel/close your account at any time. If you have an on-going subscription, you can continue to use the application until the next renewal date.",
  },
  {
    label: "How does billing work ?",
    content:
      "Once you buy a subcription, your plan will be auto renewed on the renewal date.",
  },
  {
    label: "How do I change my account email ?",
    content:
      "You can change your account email by clicking the link sent to your old email then click the link sent to your new email address.",
  },
];
</script>

<style></style>
