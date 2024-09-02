// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "POS Finance Tracker",
      short_name: "POSA",
      theme_color: "#ffffff",
      description:
        "Finance application for POS agents to keep track of transactions",
      icons: [
        {
          src: "/icon-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

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
