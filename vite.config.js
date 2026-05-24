import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: "autoUpdate",

      manifest: {

        name: "FinNova",

        short_name: "FinNova",

        description: "Sistema financiero inteligente",

        theme_color: "#000000",

        background_color: "#000000",

        display: "standalone",

        orientation: "portrait",

        start_url: "/",

        icons: [

          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png"
          }

        ]

      }

    })

  ]

})