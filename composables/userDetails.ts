export const useUserDetails = () => {
  const user = useSupabaseUser();
  const userFullName = ref(user.value?.user_metadata.full_name);
  const userEmailAddress = ref(user.value?.email);

  return {
    userFullName,
    userEmailAddress,
  };
};
