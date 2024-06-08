// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  typescript: {
    strict: true,
    builder: "vite",
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  modules: ["@nuxt/eslint"],
  components: [
    {
      path: "~/components/icon",
      global: true,
      prefix: "Icon",
    },
    {
      path: "~/components/shared",
      pathPrefix: false,
    },
    "~/components",
  ],
});