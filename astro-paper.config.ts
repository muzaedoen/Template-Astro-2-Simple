import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://web-berita.pages.dev/",
    title: "SegoPager",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
    author: "WBU",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://segopager.eu.org",
    },
    search: "pagefind",
  },
  socials: [

    { name: "facebook", url: "https://www.facebook.com/mastomo" },

  ],
});