// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxt/ui", "@nuxtjs/google-fonts"],

  supabase: {
    redirect: true,
  },

  googleFonts: {
    families: {
      Inter: "200..700",
    },
  },

  // runtime config
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },

  compatibilityDate: "2024-07-25",
});
