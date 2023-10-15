type ThemeKey = "primary" | "secondary" | "white";

type AppTheme = Record<ThemeKey, string>;

const Default: AppTheme = {
  primary: "#094694",
  secondary: "#0090F5",
  white: "#FFFFFF",
};

export default Default;
