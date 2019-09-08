/*
 * @Description: nuxt 配置文件
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-09-06 13:01:48
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-09-07 00:18:58
 */
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['user-agent', 'visits']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#42B883'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
