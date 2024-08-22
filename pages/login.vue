<template>
  <div class="min-h-screen px-10 pt-10">
    <div class="mx-auto max-w-96">
      <div class="mb-5 flex justify-center">
        <img src="/icon.png" alt="Untitled UI logo" class="h-12 w-12" />
      </div>
      <div class="mb-5 text-center">
        <h1 class="text-2xl font-semibold md:text-3xl">
          {{ tabHeadings[selectedTabIndex] }}
        </h1>
        <p class="text-base text-gray-500">
          {{ tabTaglines[selectedTabIndex] }}
        </p>
      </div>

      <div>
        <UTabs
          v-model="selectedTabIndex"
          :items="items"
          @change="onTabChange"
          class="w-full"
        >
          <template id="signup" #signup="{ item }">
            <UFormGroup label="Name" name="name" size="lg" class="mb-4 mt-4">
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
                <p class="text-gray-700 dark:text-gray-400">
                  Must be atleast 8 characters
                </p>
              </div>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-check-circle-solid"
                  class="text-xl text-gray-400"
                />
                <p class="text-gray-700 dark:text-gray-400">
                  Must contain one special character
                </p>
              </div>
            </div>
            <UButton
              :loading="pending"
              :disabled="pending"
              @click="onSubmitSignup"
              color="violet"
              size="lg"
              class="mb-3 font-semibold"
              block
              >Get started</UButton
            >
            <UButton
              color="white"
              icon="i-flat-color-icons-google"
              variant="solid"
              size="lg"
              class="mb-6 font-semibold"
              @click="googleSignIn"
              block
              >Sign up with Google</UButton
            >
            <p class="text-center">
              Already have an account?
              <NuxtLink
                @click="changeTab(1)"
                class="font-semibold text-primary hover:cursor-pointer"
                >Log in</NuxtLink
              >
            </p>
          </template>

          <template id="login" #login="{ item }">
            <UFormGroup label="Email" name="email" size="lg" class="mb-4">
              <UInput
                type="email"
                v-model="loginForm.email"
                placeholder="Enter your email"
              />
            </UFormGroup>
            <UFormGroup label="Password" name="password" size="lg" class="mb-4">
              <UInput
                type="password"
                v-model="loginForm.password"
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
                <p class="text-sm font-semibold text-primary">
                  Forgot Password
                </p>
              </div>
            </div>
            <UButton
              :loading="pending"
              :disabled="pending"
              @click="onSubmitLogin"
              color="violet"
              size="lg"
              class="mb-3 font-semibold"
              block
              >Sign in</UButton
            >
            <UButton
              color="white"
              icon="i-flat-color-icons-google"
              variant="solid"
              size="lg"
              class="mb-6 font-semibold"
              @click="googleSignIn"
              block
              >Sign in with Google</UButton
            >
            <p class="text-center">
              Don't have an account?
              <NuxtLink
                @click="changeTab(0)"
                class="font-semibold text-primary hover:cursor-pointer"
                >Sign up</NuxtLink
              >
            </p>
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Login",
});

definePageMeta({
  layout: false,
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

const selectedTabIndex = ref(0);
function onTabChange(index: number) {
  selectedTabIndex.value = index;
}

function changeTab(index: number) {
  selectedTabIndex.value = index;
}

const signupForm = reactive({ name: "", email: "", password: "" });
const loginForm = reactive({
  email: "testuser@financetracker.io",
  password: "password",
});
const rememberUser = ref(false);

const pending = ref(false);
const { toastError, toastSuccess } = useAppToast();
const supabase = useSupabaseClient();
useRedirectIfAuthenticated();

async function onSubmitSignup() {
  pending.value = true;
  try {
    const { error } = await supabase.auth.signUp({
      email: signupForm.email,
      password: signupForm.password,
      options: {
        data: {
          display_name: signupForm.name,
        },
      },
    });
    if (error) {
      toastError({
        title: "Error authenticating",
        description: error.message,
      });
    } else {
      toastSuccess({
        title: "Success",
        description: "Login successful!",
      });
      // Needs a better approach for redirection after successful login
      window.location.href = "/dashboard";
    }
  } finally {
    pending.value = false;
  }
}

async function onSubmitLogin() {
  pending.value = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    });
    if (error) {
      toastError({
        title: "Error authenticating",
        description: error.message,
      });
    } else {
      toastSuccess({
        title: "Success",
        description: "Login successful!",
      });
      // Needs a better approach for redirection after successful login
      window.location.href = "/dashboard";
    }
  } finally {
    pending.value = false;
  }
}

const baseUrl = useRuntimeConfig().public.baseUrl;

async function googleSignIn() {
  let { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${baseUrl}/dashboard`,
    },
  });
  if (error) {
    toastError({
      title: "Error authenticating",
      description: error.message,
    });
  }
}
</script>
