<template>
  <div class="pb-6">
    <div class="gradient-background h-40 w-full md:h-60"></div>

    <section
      class="-mt-16 flex flex-col gap-3 p-5 md:-mt-12 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <UAvatar
          :src="avatarUrl"
          :alt="userFullName"
          size="3xl"
          class="ring ring-white"
          :ui="{ size: { '3xl': 'w-24 h-24 md:w-40 md:h-40' } }"
        >
          <UIcon
            name="i-fluent-checkmark-starburst-16-filled"
            class="absolute bottom-1 right-1 text-blue-500"
          />
        </UAvatar>
        <div>
          <h2
            class="text-2xl font-semibold text-black dark:text-white md:text-3xl"
          >
            {{ userFullName }}
          </h2>
          <p class="text-xs font-normal text-gray-500 md:text-base">
            {{ userEmailAddress }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <UButton
          label="Share"
          size="sm"
          variant="outline"
          color="white"
          icon="i-tabler-user-plus"
          :ui="{
            rounded: 'rounded-lg',
            variant: { outline: 'ring-gray-300 dark:ring-gray-700' },
          }"
        />
        <UButton
          label="View Profile"
          size="sm"
          variant="solid"
          :ui="{ rounded: 'rounded-lg' }"
        />
      </div>
    </section>

    <section
      class="mb-12 mt-2 flex flex-col gap-4 px-5 md:flex-row md:justify-between"
    >
      <div>
        <h4
          class="text-sm font-semibold text-gray-700 dark:text-gray-300 md:text-lg"
        >
          Personal Information
        </h4>
        <p
          class="text-xs font-normal text-gray-600 dark:text-gray-400 md:text-sm"
        >
          Update your photo and personal details.
        </p>
      </div>

      <!-- Form -->
      <div class="md:w-4/6">
        <UForm
          :state="state"
          :schema="PersonalInfoSchema"
          @submit.prevent="save"
        >
          <UCard>
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

            <UFormGroup
              required
              size="md"
              label="Email"
              name="email"
              class="mb-6"
            >
              <UInput icon="i-heroicons-envelope" v-model="state.email" />
            </UFormGroup>

            <div class="flex flex-col gap-4 md:flex-row">
              <UAvatar
                :src="avatarPreviewUrl || avatarUrl"
                :alt="userFullName"
                size="2xl"
              />

              <div
                class="flex w-full flex-col items-center rounded-xl border-2 border-gray-200 py-4 dark:border-gray-700"
              >
                <div
                  class="mb-2 flex items-center justify-center rounded-xl border-2 border-gray-200 p-2 dark:border-gray-700"
                >
                  <UIcon
                    name="i-solar-cloud-upload-outline"
                    class="h-5 w-5 text-gray-700 dark:text-gray-300"
                  />
                </div>

                <p>
                  <input
                    type="file"
                    class="hidden"
                    ref="fileInput"
                    @change="handleFileChange"
                  />
                  <UButton
                    label="Click to upload"
                    variant="ghost"
                    @click="triggerFileInput"
                  /><span class="text-gray-700 dark:text-gray-300"
                    >or drag and drop</span
                  >
                </p>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max, 800*400px)
                </p>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-end gap-2">
                <UButton
                  label="Cancel"
                  variant="outline"
                  color="white"
                  :ui="{
                    rounded: 'rounded-lg',
                    variant: { outline: 'ring-gray-300 dark:ring-gray-700' },
                  }"
                />
                <UButton
                  type="submit"
                  label="Save changes"
                  :loading="pending"
                  :disabled="pending"
                  :ui="{
                    rounded: 'rounded-lg',
                  }"
                />
              </div>
            </template>
          </UCard>
        </UForm>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PersonalInfoSchema } from "~/schemas/PersonalInfoSchema";
const supabase = useSupabaseClient();
const { userFullName, userEmailAddress } = useUserDetails();
const { toastSuccess, toastError } = useAppToast();
const { avatarUrl } = useAvatarUrl();

type UpdateUserType = {
  email?: string;
  data: {
    full_name: string;
    avatar_url?: string;
  };
};

const pending = ref(false);
const avatarPreviewUrl = ref<string | null>(null);
const uploadedAvatar = ref<File | null>(null);

const state = ref({
  firstName: userFullName.value.split(" ")[0],
  lastName: userFullName.value.split(" ")[1],
  email: userEmailAddress.value,
});

const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    uploadedAvatar.value = file;
    avatarPreviewUrl.value = URL.createObjectURL(file);
  }
};

const save = async () => {
  pending.value = true;
  try {
    const data: UpdateUserType = {
      data: {
        full_name: state.value.firstName + " " + state.value.lastName,
      },
      email: userEmailAddress.value,
    };

    if (state.value.email !== userEmailAddress.value) {
      data.email = state.value.email;
    }

    if (uploadedAvatar.value) {
      // Upload the file to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(`avatar-${Date.now()}.png`, uploadedAvatar.value);

      if (uploadError) throw uploadError;

      // Add the uploaded file path to the data object
      data.data.avatar_url = uploadData.path;
    }

    const { error } = await supabase.auth.updateUser(data);
    if (error) throw error;

    toastSuccess({
      title: "Profile updated",
      description: "Your profile has been updated",
    });
  } catch (error: any) {
    toastError({
      title: "Error updating profile",
      description: error.message,
    });
  } finally {
    pending.value = false;
  }
};

onBeforeUnmount(() => {
  if (avatarPreviewUrl.value) {
    URL.revokeObjectURL(avatarPreviewUrl.value);
  }
});
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(
    140deg,
    #981ee3,
    #b74bfe 10% 55%,
    #f79b76 70%,
    #fde579 90%
  );
}
@media (max-width: 630px) {
  .gradient-background {
    background: linear-gradient(140deg, #b74bfe 50%, #f79b76 70%);
  }
}
</style>
