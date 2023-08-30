module.exports = {
  modules: ['bootstrap-vue/nuxt',
    '@nuxtjs/proxy',
    '@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: process.env.API_URL,
      changeOrigin : true, //cross origin(교차출처 CORS) 허용
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'b_pj_progressive_fe',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

