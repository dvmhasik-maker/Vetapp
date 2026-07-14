import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.dvmhasik.vetapp',
  appName: 'VetApp',
  webDir: 'dist',
  server: {
    url: 'https://vetapp-b1i.pages.dev',
    cleartext: false,
    allowNavigation: [
      'vetapp-b1i.pages.dev',
      '*.vetapp-b1i.pages.dev'
    ]
  }
}

export default config