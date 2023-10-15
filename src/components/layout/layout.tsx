"use client";
import { Box, Grid, ThemeProvider } from "@mui/material";

import appColors from "@/styles/appColors";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import { theme } from "@/theme/theme";
import "@/styles/globals.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container display={"flex"} flexDirection={"row"}>
        <SideBar />
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#E3E3E3",
            height: "100vh",
          }}
        >
          <NavBar />
          <Box sx={{ pt: 13, pl: 32, pr: 3, pb: 3 }}>{children}</Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Layout;
