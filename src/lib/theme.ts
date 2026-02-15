/**
 * Theme configuration for The Green Barber
 * Brand colors and design tokens - Tasmanian Forest Aesthetic
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
      tan: "#a0826d",
      cream: "#c4a574",
      bark: "#6b4e3d",
    },
    moss: {
      dark: "#5a7c4a",
      light: "#7a9c6a",
    },
    forest: {
      deep: "#1a3d1a",
      medium: "#2d5016",
    },
    accent: {
      warm: "#f59e0b",
      orange: "#ea580c",
    },
  },
  fonts: {
    display: "var(--font-display)",
    sans: "var(--font-sans)",
    serif: "var(--font-serif)",
    heading: "var(--font-display)",
    body: "var(--font-sans)",
  },
  gradients: {
    forest: "linear-gradient(135deg, #1a3d1a 0%, #2d5016 25%, #4a7c3a 50%, #6b9f5a 75%, #7a9c6a 100%)",
    earth: "linear-gradient(135deg, #6b4e3d 0%, #8b6f47 25%, #a0826d 50%, #c4a574 100%)",
    moss: "linear-gradient(135deg, #2d5016 0%, #4a7c3a 30%, #5a7c4a 60%, #7a9c6a 100%)",
    atmospheric: "linear-gradient(135deg, #1a3d1a 0%, #2d5016 25%, #4a7c3a 50%, #6b9f5a 75%, #7a9c6a 100%)",
  },
  spacing: {
    section: "py-16 md:py-24",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
} as const;

