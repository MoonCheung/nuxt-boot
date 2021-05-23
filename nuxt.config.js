const webpack = require('webpack');

export default {
  mode: 'universal',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
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
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    // middleware: ['user-agent', 'visits']
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
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/tooplate-style.css',
    '@/assets/css/hero-slider.css',
    '@/assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/font-awesome'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/router'
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
  // bootstrapVue 按需引入
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'NavbarPlugin',
      'CarouselPlugin',
      'ImagePlugin',
      'TabsPlugin',
      'FormInputPlugin',
      'FormTextareaPlugin',
      'ButtonPlugin'
    ],
    directivePlugins: []
  },
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
    extend(config, ctx) {
      // Extend only webpack config for client-bundle
      const {
        isClient,
        loaders: { vue }
      } = ctx;
      if (isClient) {
        vue.transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        };
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },
  /**
   * 使用generate命令方式运行打包生成静态
   */
  generate: {
    routes: ['/']
  }
};
