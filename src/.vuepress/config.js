const { description } = require('../../package')

module.exports = {
  base: "/gh-pages/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/alinceDev/gh-pages',
    docsDir: 'src',
    repoLabel: "Contribuer!",
    editLinks: true,
    editLinkText: "Modifier cette page",
    lastUpdated: true,
    logo: "/assets/logo.png",
    nav: [
      {
        text: 'Général',
        link: '/main/',
      },
      {
        text: 'Mercipourlinfo',
        link: '/mpi/'
      },
      {
        text: 'Santemag',
        link: '/sam/'
      },
      {
        text: 'Parents',
        link: '/parents/'
      },
      {
        text: 'Momes',
        link: '/momes/'
      },
      {
        text: 'BO',
        link: '/bo/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/main/': [
        {
          title: 'Installation',
          collapsable: false,
          children: [
            {
              title: 'Installation back',
              path: 'install/back',
            },
            {
              title: 'Installation front',
              path: 'install/front',
            },
          ]
        },
        {
          title: 'Architecture',
          collapsable: false,
        },
        {
          title: 'Documentation',
          collapsable: false,
          path: "documentation",
        }
      ],
      '/mpi/': [
        {
          title: 'Guide',
          collapsable: false,
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": "public/assets",
      },
    },
  }
}
