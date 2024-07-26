interface Toast {
  title: string;
  description?: string;
}

export const useAppToast = () => {
  const toast = useToast();

  return {
    toastSuccess: ({ title, description }: Toast) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-check-circle",
        color: "green",
      });
    },
    toastError: ({ title, description }: Toast) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
      });
    },
  };
};
