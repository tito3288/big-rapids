export const theme = {
  colors: {
    primary: "#DA3426",
    secondary: "#690A14",
    accent: "#DA3426",
    background: "#0D111E",
    surface: "#0a0d17",
    foreground: "#FFFFFF",
    muted: "#B2B6BA",
    line: "rgb(255 255 255 / 0.1)",
    chip: "rgb(255 255 255 / 0.3)",
    logoPlate: "rgb(255 255 255 / 0.95)",
    paper: "#FFFFFF",
    ink: "#0D111E",
    paperMuted: "#515762",
    paperLine: "rgb(13 17 30 / 0.14)",
  },
  fonts: {
    heading: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    body: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  radius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
  },
} as const;

export type Theme = typeof theme;
