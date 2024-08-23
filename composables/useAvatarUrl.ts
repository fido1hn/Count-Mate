export const useAvatarUrl = () => {
  /*
  Get the current user metadata - containing the avatar image
  Get the public URL of that image
  Watch user for changes - display current user image
  */

  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const getPublicUrl = () => {
    if (!user.value?.user_metadata?.avatar_url) return null;

    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(user.value?.user_metadata?.avatar_url);

    return data.publicUrl;
  };

  const avatarUrl = ref(getPublicUrl());

  watch(user, () => (avatarUrl.value = getPublicUrl()), { immediate: true });

  return {
    avatarUrl,
  };
};
