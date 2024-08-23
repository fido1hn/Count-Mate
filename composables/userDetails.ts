const user = useSupabaseUser();

export const useUserDetails = () => {
  const userFullName = user.value?.user_metadata.full_name;
  const userEmailAddress = user.value?.email;
  return {
    userFullName,
    userEmailAddress,
  };
};
