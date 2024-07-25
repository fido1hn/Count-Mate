// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  ui: {
    icons: ["flat-color-icons"],
  },

  // runtime config
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },
});
