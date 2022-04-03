import 'dotenv/config';

export default {
  "expo": {
    "name": "Hawk Express Tracker",
    "slug": "hawk-tracker",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/hawk-logo.png",
    "splash": {
      "image": "./assets/UHCLsplash.png",
      "resizeMode": "contain",
      "backgroundColor": "#018744"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/hawk-logo.png",
        "backgroundColor": "#018744"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
  }
}
