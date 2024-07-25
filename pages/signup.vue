<template>
  <div class="min-h-screen px-10 pt-16">
    <div class="mx-auto max-w-96">
      <div class="mb-5 text-center">
        <h1 class="text-3xl font-semibold">Create an account</h1>
        <p class="text-base">Start your 30-day free trial</p>
      </div>
      <div>
        <UTabs :items="items" class="w-full">
          <template #signup="{ item }">
            <UFormGroup label="Name" name="name" size="lg" class="mb-4 mt-6">
              <UInput v-model="signupForm.name" placeholder="Enter your name" />
            </UFormGroup>
            <UFormGroup label="Email" name="email" size="lg" class="mb-4">
              <UInput
                v-model="signupForm.email"
                placeholder="Enter your email"
              />
            </UFormGroup>
            <UFormGroup label="Password" name="password" size="lg" class="mb-4">
              <UInput
                v-model="signupForm.password"
                placeholder="Create a password"
              />
            </UFormGroup>
            <div class="mb-4 space-y-1">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle-solid" class="text-xl" />
                <p>Must be atleast 8 characters</p>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle-solid" class="text-xl" />
                <p>Must contain one special character</p>
              </div>
            </div>
            <UButton color="violet" size="lg" class="mb-3 font-semibold" block
              >Get started</UButton
            >
            <UButton
              color="white"
              icon="i-flat-color-icons-google"
              variant="solid"
              size="lg"
              class="font-semibold"
              block
              >Sign up with Google</UButton
            >
          </template>

          <template #login="{ item }"> </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "signup",
});

const items = [
  {
    slot: "signup",
    label: "Sign up",
  },
  {
    slot: "login",
    label: "Log in",
  },
];

const signupForm = reactive({ name: "", email: "", password: "" });
const loginForm = reactive({ email: "", password: "" });

function onSubmitSignup() {
  console.log("Submitted form:", signupForm);
}

function onSubmitLogin() {
  console.log("Submitted form:", loginForm);
}
</script>

<style></style>
