
export default defineNuxtConfig({
  mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    BaseURI: process.env.BACKEND_URL || "http://localhost:1337"
  },

  meta: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  pages: true,
  /*
  ** Nuxt.js dev-modules
  */
  modules: [
    '@nuxtjs/strapi',
  ],
  strapi: {
    options: { url: process.env.STRAPI_URL || 'http://localhost:1337', prefix: '/api', version: 'v4', cookie: {}, cookieName: 'strapi_jwt' }
  },
  apollo: {
    clients: {
      default: '@/graphql/config/config.js'
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
