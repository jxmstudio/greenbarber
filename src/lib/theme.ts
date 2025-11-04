/**
 * Theme configuration for The Green Barber
 * Brand colors and design tokens
 */

export const theme = {
  colors: {
    primary: {
      dark: "#2d5016",
      medium: "#4a7c3a",
      light: "#6b9f5a",
    },
    earth: {
      brown: "#8b6f47",
      tan: "#d4c5a9",
    },
    accent: {
      warm: "#f59e0b",
      orange: "#ea580c",
    },
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  spacing: {
    section: "py-16 md:py-24",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
} as const;

