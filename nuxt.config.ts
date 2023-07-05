// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: "Portfolio",
      link: [
        {rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"},
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"},
        {rel: "icon", href: "/favicon.jpg"},
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=El+Messiri&family=Exo&family=Exo+2&family=Oswald:wght@400;500&display=swap"},
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {rel: "preconnect", href: "https://fonts.gstatic.com"}
      ],
      meta: [{
        name: "description", content: "Azizkhon Muzaffarov's Portfolio"
      },
      {
        name: "author", content: "Azizkhon"
      }]
    }
  }
})
