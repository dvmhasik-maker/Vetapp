import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.dvmhasik.vetapp',
    appName: 'VetApp',
    webDir: 'dist',
    server: {
        url: 'https://vetapp-b1i.pages.dev',
        cleartext: true
    }
};

export default config;