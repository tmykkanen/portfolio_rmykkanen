// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        name: "Oswald",
        cssVariable: "--font-oswald",
        provider: fontProviders.google(),
      },
      {
        name: "Lato",
        cssVariable: "--font-lato",
        provider: fontProviders.google(),
      },
      {
        name: "Cutive Mono",
        cssVariable: "--font-cutive-mono",
        provider: fontProviders.google(),
      },
      {
        name: "Abril Fatface",
        cssVariable: "--font-abril-fatface",
        provider: fontProviders.google(),
      },
    ],
  },

  integrations: [icon()],
});