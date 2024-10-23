// app.config.js
import "dotenv/config";

export default ({ config }) => ({
  ...config,
  expo: {
    name: "faceup",
    slug: "faceup",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/d593138f-c30b-405a-a3b8-ecacfce5fec8",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d593138f-c30b-405a-a3b8-ecacfce5fec8",
      },
      backendUrl: process.env.BACKEND_URL,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
});
