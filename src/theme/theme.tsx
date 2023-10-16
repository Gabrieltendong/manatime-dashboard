import createTheme from "@mui/material/styles/createTheme";
import appColors from "@/styles/appColors";

import "@fontsource/poppins";
import "@fontsource/roboto";

export const theme = createTheme({
  palette: {
    primary: {
      main: appColors.primary,
    },
    secondary: {
      main: appColors.secondary,
    },
    success: {
      main: appColors.success,
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto"].join(","),
  },
});
