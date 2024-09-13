<template>
  <UContainer class="py-14 md:py-20">
    <div class="mx-auto max-w-2xl px-5">
      <h2 class="mb-2 text-2xl font-semibold md:text-3xl">Get in touch</h2>
      <p
        class="mb-6 text-base font-normal text-gray-600 dark:text-gray-400 md:mb-10 md:text-lg"
      >
        Our friendly team would love to hear from you.
      </p>

      <!-- Form -->
      <UForm
        :schema="GetInTouchSchema"
        :state="state"
        @submit.prevent="onSubmit"
        v-if="!emailSent"
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

        <UFormGroup required size="md" label="Email" name="email" class="mb-4">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup required label="Message" name="message" class="mb-6">
          <UTextarea size="xl" v-model="state.message" />
        </UFormGroup>

        <UButton
          :loading="isLoading"
          :disabled="isLoading"
          block
          size="md"
          type="submit"
          >Send message</UButton
        >
      </UForm>

      <p class="text-lg font-semibold text-gray-700 dark:text-gray-400" v-else>
        You'll hear from us shortly 🙂🚨
      </p>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import { GetInTouchSchema } from "~/schemas/GetInTouchSchema";
const { toastSuccess, toastError } = useAppToast();

const isLoading = ref(false);
const emailSent = ref(false);

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

async function onSubmit() {
  try {
    isLoading.value = true;
    const data = await $fetch("/api/send-email", {
      method: "POST",
      body: state,
    });

    if (data.success) {
      toastSuccess({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      Object.keys(state).forEach(
        (key) => (state[key as keyof typeof state] = ""),
      );
      emailSent.value = true;
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    toastError({
      title: "Email send failed",
      description: "Failed to send email. Please try again.",
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
