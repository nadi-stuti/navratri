import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nulligma.fasting_navratri",
  appName: "Fasting & Navratri",
  webDir: "dist",
  android: {
    buildOptions: {
      keystorePath:
        "C:/Users/Admin/OneDrive/keys/Android_keystore/navratri_key_pass_123456.keystore",
      keystorePassword: "123456",
      keystoreAlias: "key0",
      keystoreAliasPassword: "123456",
    },
  },
};

export default config;
