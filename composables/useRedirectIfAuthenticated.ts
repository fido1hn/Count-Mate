export const useRedirectIfAuthenticated = (url = "/") => {
  const user = useSupabaseUser();

  watch(
    user,
    (user) => {
      if (user) {
        // Github issue: https://github.com/nuxt/nuxt/issues/13309
        // return navigateTo(url);
        return (window.location.href = url);
      }
    },
    { immediate: true },
  );

  return { user };
};
