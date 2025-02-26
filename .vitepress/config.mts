import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MrServer",
  description: "Maximize your server.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: 'https://raw.githubusercontent.com/mrserver-org/ui/refs/heads/main/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Install', link: '/install-mrserver' },
    ],

    sidebar: [
      {
        text: 'Basic',
        items: [
          { text: 'Installing MrServer', link: '/install-mrserver' },
        ]
      },
      {
        text: 'Creating an app',
        items: [
          { text: 'Showing a window', link: '/api/showing-window' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrserver-org' }
    ]
  }
})
