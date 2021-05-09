// const routerBase =
//   process.env.DEPLOY_ENV === 'GH_PAGES'
//     ? {
//         router: {
//           base: '/birthday/'
//         }
//       }
//     : {}

module.exports = {
  mode: 'universal',
  telemetry: false,
  // ...routerBase,
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
          '🎉Hi, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '🎉Hi, Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
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
          '🎉Hi , Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: '/social.png'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '🎂Happy Birthday,Amit! 🥳🎉'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '🎉Hi , Its your birthday and here a small gift 🎁 for you. Check it out...🎉'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/social.png'
      }
    ],
    title: '🎂Happy Birthday,Amit! 🥳🎉',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@next/dist/aos.css'
      },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css'
      // },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat+Alternates:500,700,800&display=swap'
      }
    ],
    script: [
      {
        src: '/jquery.js'
      },
      {
        src: '/tweenmax.js'
      },
      {
        src: 'superscrollorama.js'
      },
      // {
      //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/tweenmax.min.js'
      // },
      // {
      //   src:
      //     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/jquery.superscrollorama.js'
      // },
      {
        src: '/iscroll.js'
      },
      // {
      //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/iscroll.js'
      // }
      {
        src: '/hotjar.js'
      }
    ]
  },
  router: { base: '/birthday/' },
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
    id: 'UA-165914173-1',
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
  // axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
