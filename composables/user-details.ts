export const useUserDetails = () => {
  const user = useSupabaseUser();

  const getUserName = () => {
    if (!user.value?.user_metadata?.full_name) return null;
    return user.value?.user_metadata.full_name;
  };

  const getUserEmail = () => {
    if (!user.value?.user_metadata?.email) return null;
    return user.value?.user_metadata?.email;
  };

  const userFullName = ref(getUserName());
  const userEmailAddress = ref(getUserEmail());

  watch(
    user,
    () => {
      userEmailAddress.value = getUserEmail();
      userFullName.value = getUserName();
    },
    { immediate: true },
  );

  return {
    userFullName,
    userEmailAddress,
  };
};
