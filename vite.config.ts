import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

const routes = [
  '/',
  '/hypothyroidism',
  '/parasites',
  '/food-amount',
  '/fluid-therapy',
  '/neurological',
  '/echocardiography',
  '/heart-size-xray',
  '/poisoning',
  '/cushing',
  '/atopy',
  '/cat-obesity',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
  '/articles',
  '/articles/fluid-therapy',
  '/articles/cushing',
  '/articles/hypothyroidism',
  '/articles/atopy',
  '/articles/echocardiography',
  '/articles/neurological',
  '/articles/parasites',
  '/articles/poisoning',
  '/articles/food-amount',
  '/articles/heart-size-xray',
  '/articles/cat-obesity'
]

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'build'
      ? [
          prerender({
            routes,
            renderer: '@prerenderer/renderer-puppeteer',
            rendererOptions: {
              renderAfterTime: 1000,
              launchOptions: {
                args: ['--no-sandbox', '--disable-setuid-sandbox']
              }
            }
          })
        ]
      : [])
  ],
  server: {
    host: true
  },
  preview: {
    host: true
  }
}))
