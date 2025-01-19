import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CASLF',
  description: 'Documentation de l\'application CASLF',
  lang: 'fr-FR',
  base: '/appli-caslf-doc/',
  cleanUrls: true,
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Installation',
        items: [
          {text: 'Généralités', link: '/install/intro'},
          {text: 'Android', link: '/install/android/install'},
          {text: 'IPhone', link: '/install/iphone/install'},
          {text: 'Ordinateur', link: '/install/pc/pc'}
        ]
      },
      { text: 'Guide d\'utilisation', link: '/user_guide/intro' },
    ],

    sidebar: [
      {
        text: 'Installation',
        collapsed: true,
        items: [
          { text: 'Généralités', link: '/install/intro' },
          { text: 'Android',
            items: [
              {text: 'installer l\'appli', link: '/install/android/install'},
              {text: 'première connexion', link: '/install/android/connect'},
              {text: 'l\'appli est prête!', link: '/install/android/end'}
            ]
          },
          { text: 'IPhone', 
            items: [
              {text: 'installer l\'appli', link: '/install/iphone/install'},
              {text: 'première connexion', link: '/install/iphone/connect'},
              {text: 'activer les notifications', link: '/install/iphone/notification'},
              {text: 'l\'appli est prête!', link: '/install/iphone/end'}
            ]
          },
          { text: 'Consulter depuis un ordinateur', link: '/install/pc/pc' },
        ],
      },
      {
        text: 'Guide d\'utilisation',
        items: [
          { text: 'Présentation', link: '/user_guide/intro' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nbarikipoulos/appli-caslf-doc' }
    ]
  }
})
