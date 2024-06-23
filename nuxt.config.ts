// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // use mode to disable server site rendering 
  ssr: false,
  devtools: { enabled: true },


  build : {
    transpile: ['vuetify'],
  },
  css: ["@/assets/scss/style.scss", "@/assets/scss/header-styles.scss"],
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  }

})
