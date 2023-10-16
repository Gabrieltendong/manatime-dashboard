import { createTheme } from "@mui/material";

export const theme_list_module_solde = createTheme({
    components: {
      // Name of the component
      MuiPopover: {
        styleOverrides: {
          // Name of the slot
          root: {
            top: 0
          },
          paper: {
            // Some CSS
            maxHeight: "100%",
            top: "0!important",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30
          },
        },
      },
    },
});