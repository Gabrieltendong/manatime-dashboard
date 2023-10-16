type ThemeKey = "primary" | "secondary" | "white" | "success";

type AppTheme = Record<ThemeKey, string>;

const Default: AppTheme = {
  primary: "#094694",
  secondary: "#0090F5",
  white: "#FFFFFF",
  success: "#2ecc71",
};

export default Default;
