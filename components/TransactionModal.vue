<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        {{ isEditing ? "Edit" : "Add" }} Transaction
      </template>

      <UForm :state="state" :schema="TransactionSchema" @submit.prevent="save">
        <UFormGroup
          :required="true"
          label="Payed With"
          name="type"
          class="mb-4"
        >
          <USelect
            :disabled="isEditing"
            :options="['Card', 'Transfer']"
            placeholder="Select the payment method"
            v-model="state.payment_type"
          />
        </UFormGroup>

        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput
            type="number"
            placeholder="Amount"
            v-model.number="state.amount"
          />
        </UFormGroup>

        <UFormGroup
          label="Transaction date"
          :required="false"
          name="created_at"
          class="mb-4"
        >
          <UInput
            type="date"
            icon="i-heroicons-calendar-days-20-solid"
            v-model="state.created_at"
            :disabled="true"
          />
        </UFormGroup>

        <UButton
          type="submit"
          color="black"
          variant="solid"
          label="Save"
          :loading="isLoading"
        />
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup>
import { TransactionSchema } from "~/schemas/TransactionSchema";

// Composables
const supabase = useSupabaseClient();
const { toastSuccess, toastError } = useAppToast();

// Props
const props = defineProps({
  modelValue: Boolean,
  transaction: {
    payment_type: Object,
    required: false,
  },
});

// Editing
const isEditing = computed(() => !!props.transaction);
const isLoading = ref(false);

// State
const initialState = isEditing.value
  ? {
      payment_type: props.transaction.payment_type,
      amount: props.transaction.amount,
      created_at: new Date(props.transaction.created_at)
        .toISOString()
        .split("T")[0],
    }
  : {
      payment_type: "Card",
      amount: 0,
      created_at: new Date().toISOString().split("T")[0],
    };

const state = ref({
  ...initialState,
});

// Save
const emit = defineEmits(["update:modelValue", "saved"]);

const save = async () => {
  isLoading.value = true;

  try {
    const { error } = await supabase.from("transactions").upsert({
      amount: state.value.amount,
      payment_type: state.value.payment_type,
      id: props.transaction?.id,
    });

    if (!error) {
      toastSuccess({
        title: "Transaction saved",
      });
      isOpen.value = false;
      emit("saved");
      return;
    }

    throw error;
  } catch (error) {
    toastError({
      title: "Transaction not saved",
      description: error.message,
    });
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  Object.assign(state.value, initialState);
};

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) resetForm();
    emit("update:modelValue", value);
  },
});
</script>
