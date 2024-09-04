<template>
  <UContainer class="py-14 md:py-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-2 text-2xl font-semibold md:text-3xl">Get in touch</h2>
      <p
        class="mb-7 text-base font-normal text-gray-600 dark:text-gray-400 md:mb-10 md:text-lg"
      >
        Our friendly team would love to hear from you.
      </p>

      <!-- Form -->
      <UForm
        :schema="GetInTouchSchema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <div class="mb-4 flex flex-col gap-4 md:flex-row">
          <UFormGroup
            required
            size="md"
            label="First name"
            name="firstName"
            class="flex-1"
          >
            <UInput v-model="state.firstName" />
          </UFormGroup>
          <UFormGroup
            required
            size="md"
            label="Last name"
            name="lastName"
            class="flex-1"
          >
            <UInput v-model="state.lastName" />
          </UFormGroup>
        </div>

        <UFormGroup required size="md" label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { GetInTouchSchema } from "/schemas/GetInTouchSchema.ts";
const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

function onSubmit() {
  console.log("submit");
}
</script>

<style></style>
