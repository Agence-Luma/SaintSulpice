import { apiEndpoint, repositoryName } from "./slicemachine.config.json";

const rem = (px: number) => (px ? `${(px / 16).toFixed(7)}rem` : "0rem");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic", '@nuxtjs/tailwindcss', '@nuxtjs/device'],

  app: {
    head: {
      title: 'Saint-Sulpice',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: [
    '~/styles/global.css',
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig: {
      routes: [
        {
          type: 'home',
          path: '/',
        },
      ]
    }
  },

  tailwindcss: {
    config: {
      content: [
        './app/**/*.{js,ts,vue}',
        './slices/**/*.{js,ts,vue}'
      ],
      theme: {
        fontFamily: {
          sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          bebas: ['Bebas', 'ui-sans-serif'],
          carmen: ['Carmen', 'ui-sans-serif'],
        },
        boxShadow: {
          'l': '0 4px 16px rgba(0, 0, 0, 0.15)',
          'xl': '0 45px 80px rgba(0, 10, 33, 0.05)',
          'none': '0 0 #0000'
        },
        borderRadius: {
          'lg': '0.5rem',
          'xl': '0.75rem',
          '3xl': '1.5rem',
          '4xl': '3rem',
          'full': '9999px',
        },
        fontSize: {
          '2xs': rem(14),
          xs: rem(16),
          s: rem(18),
          m: rem(20),
          l: rem(32),
          xl: rem(48),
          '2xl': rem(90),
          '3xl': rem(224)
        },
        colors: {
          white: "#FFFFFF",
          lightblue: "#2c80b1",
          darkblue: "#1866a8",
          black: "#000000"
        }
      },
    }
  }
})