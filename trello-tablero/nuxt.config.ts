// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  tailwindcss: {
 
  },
  ssr: false,
  
  devtools: { enabled: true }
})
