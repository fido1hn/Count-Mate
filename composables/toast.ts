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
        timeout: 2000,
      });
    },
    toastError: ({ title, description }: Toast) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
        timeout: 2000,
      });
    },
  };
};
