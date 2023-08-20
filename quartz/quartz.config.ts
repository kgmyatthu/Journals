import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧠 Kaung's Second Brain",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "brain.kaungmyatthu.dev",
    ignorePatterns: ["Daily", "templates", "Excalidraw", "Quartz"],
    theme: {
      typography: {
        header: "Times New Roman",
        body: "Times New Roman",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff6e2",
          lightgray: "#b5b5b5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#000",
          secondary: "#000",
          tertiary: "#0064ff",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#000",
          lightgray: "#002e4d",
          gray: "#939393",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#0098ff",
          tertiary: "#009709",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
    ],
  },
}

export default config
