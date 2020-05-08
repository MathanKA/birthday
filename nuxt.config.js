const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/birthday/'
        }
      }
    : {}

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'apple-mobile-web-app-title',
        hid: 'apple-mobile-web-app-title',
        content: 'Happy Birthday, Amit!'
      },
      {
        hid: 'title',
        name: 'title',
        content: '🎂Happy Birthday,Amit! 🥳🎉'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '🎉Hi baby, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '🎉Hi baby, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '🎉Hi baby, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '🎉Hi baby, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      // { hid: 'og:image', property: 'og:image', content: meta.image },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '🎂Happy Birthday,Amit! 🥳🎉'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '🎂Happy Birthday,Amit! 🥳🎉'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '🎉Hi baby, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      }
    ],
    title: '🎂Happy Birthday,Amit! 🥳🎉',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@next/dist/aos.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat+Alternates:500,700,800&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/tweenmax.min.js'
      },
      {
        src:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/jquery.superscrollorama.js'
      }
      // {
      //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/iscroll.js'
      // }
      // {
      //   src: '~/plugins/hotjar.js'
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/dom-confetti.js',
      mode: 'client'
    }
    // {
    //   src: '~/assets/scripts/giftbox.js',
    //   mode: 'client'
    // }
    // {
    //   src: '~/plugins/balloons.js',
    //   mode: 'client'
    // }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-ddsad',
    debug: {
      sendHitTask: true
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  ...routerBase,
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
