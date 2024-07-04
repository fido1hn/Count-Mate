<template>
  <UCard>
    <template #header>Sign-in to Finance Tracker</template>
    <form @submit.prevent="handleLogin">
      <UFormGroup label="Email" name="email" class="mb-4" :required="true">
        <UInput
          type="email"
          placeholder="Email"
          required
          v-model="email"
          value="testuser@financetracker.io" />
      </UFormGroup>

      <UFormGroup
        label="Password"
        name="password"
        class="mb-4"
        :required="true"
        help="Use default input values to login to test user account">
        <UInput
          type="password"
          placeholder="Password"
          required
          v-model="password"
          value="password" />
      </UFormGroup>

      <UButton
        type="submit"
        variant="solid"
        color="black"
        :loading="pending"
        :disabled="pending"
        >Sign-in</UButton
      >
    </form>
  </UCard>

  <!-- <UCard v-else>
    <template #header>Email has been sent</template>
    <div class="text-center">
      <p class="mb-4">
        We have sent an email to <strong>{{ email }}</strong> with a link to
        sign in.
      </p>
      <p> <strong>Important:</strong> The link will expire in 5 mins </p>
    </div>
  </UCard> -->
</template>

<script lang="js" setup>
// const success = ref(false);
const email = ref('testuser@financetracker.io');
const password = ref('password');
const pending = ref(false);
const { toastError, toastSuccess } = useAppToast();
const supabase = useSupabaseClient();
const redirectUrl = useRuntimeConfig().public.baseUrl;

useRedirectIfAuthenticated();

const handleLogin = async () => {
  pending.value = true;
  try {
    // const { error } = await supabase.auth.signInWithOtp({
    //   email: email.value,
    //   options: {
    //     emailRedirectTo: `${redirectUrl}/confirm`,
    //   },
    // });
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: `${redirectUrl}/confirm`,
      },
    });
    if (error) {
      toastError({
      title: 'Error authenticating',
      description: error.message,
    })} else {
      toastSuccess({
        title: 'Success',
        description: 'Login successful!'
      })
    }
  } finally {
    pending.value = false;
  }
};
</script>
