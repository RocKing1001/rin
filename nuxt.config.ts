import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/styles/_variables.scss";',
        },
      },
    },
  },
  publicRuntimeConfig: {
    APIKEY: process.env.APIKEY,
    PROJECTID: process.env.PROJECTID
  },
  privateRuntimeConfig: {
    APIKEY: process.env.APIKEY,
    PROJECTID: process.env.PROJECTID
  }
});
