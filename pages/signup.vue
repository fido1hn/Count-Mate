<template>
  <div class="min-h-screen px-10 pt-16">
    <div class="mx-auto max-w-96">
      <div class="mb-5 text-center">
        <h1 class="text-3xl font-semibold">
          {{ tabHeadings[selectedTabIndex] }}
        </h1>
        <p class="text-base text-gray-500">
          {{ tabTaglines[selectedTabIndex] }}
        </p>
      </div>
      <div>
        <UTabs :items="items" @change="onChange" class="w-full">
          <template #signup="{ item }">
            <UFormGroup label="Name" name="name" size="lg" class="mb-4 mt-6">
              <UInput v-model="signupForm.name" placeholder="Enter your name" />
            </UFormGroup>
            <UFormGroup label="Email" name="email" size="lg" class="mb-4">
              <UInput
                type="email"
                v-model="signupForm.email"
                placeholder="Enter your email"
              />
            </UFormGroup>
            <UFormGroup label="Password" name="password" size="lg" class="mb-4">
              <UInput
                type="password"
                v-model="signupForm.password"
                placeholder="Create a password"
              />
            </UFormGroup>
            <div class="mb-4 space-y-1">
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-check-circle-solid"
                  class="text-xl text-gray-400"
                />
                <p class="text-gray-700">Must be atleast 8 characters</p>
              </div>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-check-circle-solid"
                  class="text-xl text-gray-400"
                />
                <p class="text-gray-700">Must contain one special character</p>
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
              class="mb-6 font-semibold"
              block
              >Sign up with Google</UButton
            >
            <p class="text-center">
              Already have an account?
              <a href="" class="text-primary font-semibold">Log in</a>
            </p>
          </template>

          <template #login="{ item }">
            <UFormGroup label="Email" name="email" size="lg" class="mb-4">
              <UInput
                type="email"
                v-model="signupForm.email"
                placeholder="Enter your email"
              />
            </UFormGroup>
            <UFormGroup label="Password" name="password" size="lg" class="mb-4">
              <UInput
                type="password"
                v-model="signupForm.password"
                placeholder="•••••••••"
              />
            </UFormGroup>
            <div class="mb-4">
              <div class="flex items-center justify-between">
                <UCheckbox
                  v-model="rememberUser"
                  name="rememberUser"
                  label="Remember for 30 days"
                />
                <p class="text-primary text-sm font-semibold">
                  Forgot Password
                </p>
              </div>
            </div>
            <UButton color="violet" size="lg" class="mb-3 font-semibold" block
              >Sign in</UButton
            >
            <UButton
              color="white"
              icon="i-flat-color-icons-google"
              variant="solid"
              size="lg"
              class="mb-6 font-semibold"
              block
              >Sign in with Google</UButton
            >
            <p class="text-center">
              Don't have an account?
              <a href="" class="text-primary font-semibold">Sign up</a>
            </p>
          </template>
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

const tabHeadings = ["Create an account", "Login to your account"];
const tabTaglines = [
  "Start your 30-day free trial.",
  "Welcome back! Please enter your details.",
];

const signupForm = reactive({ name: "", email: "", password: "" });
const loginForm = reactive({ email: "", password: "" });
const rememberUser = ref(false);

function onSubmitSignup() {
  console.log("Submitted form:", signupForm);
}

function onSubmitLogin() {
  console.log("Submitted form:", loginForm);
}

const selectedTabIndex = ref(0);
function onChange(index: number) {
  selectedTabIndex.value = index;
}
</script>

<style></style>
