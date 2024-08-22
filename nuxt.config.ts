// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
  ],

  imports: {
    dirs: ["stores"],
  },

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/"],
      cookieRedirect: false,
    },
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/di5iopizb/image/upload/v1722940622/",
    },
  },

  googleFonts: {
    families: {
      Inter: "200..700",
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  // runtime config
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },

  compatibilityDate: "2024-07-25",
});
