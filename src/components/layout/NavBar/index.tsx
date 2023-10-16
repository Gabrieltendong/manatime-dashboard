import { Avatar, Badge, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Balance } from "@mui/icons-material";

import styles from "./style.module.css";

const NavBar = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  return (
    <Grid container className={styles.container}>
      <Grid xs={8} item container direction="row" alignItems="center">
        <Grid item>
          <Image
            alt="Remy Sharp"
            width={40}
            height={40}
            src="images/Absence_Icon.svg"
          />
        </Grid>
        <Grid item ml={4}>
          <Typography variant="h6" fontFamily={"Poppins"}>
            Absence
          </Typography>
        </Grid>
        <Grid item ml={3}>
          <Image
            alt="Remy Sharp"
            width={20}
            height={20}
            src="images/stripe2.svg"
          />
        </Grid>
        <Grid item ml={3}>
          <Balance sx={{ color: "#858585" }} />
        </Grid>
        <Grid item ml={3}>
          <Typography variant="caption" fontFamily={"Poppins"}>Sous module</Typography>
        </Grid>
        <Grid item ml={3}>
          <Image
            alt="Remy Sharp"
            width={20}
            height={20}
            src="images/stripe2.svg"
          />
        </Grid>
        <Grid item ml={3}>
          <Typography variant="caption" fontFamily={"Poppins"}>Sous sous module</Typography>
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid
          item
          xs
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Image width={40} height={40} alt="image" src={"images/Help.svg"} />
          </Grid>
          <Grid item marginLeft={1}>
            <Image
              width={40}
              height={40}
              alt="image"
              src={"images/Settings.svg"}
            />
          </Grid>
          <Grid item marginLeft={3}>
            <div className={styles.divider} />
          </Grid>
          <Grid item sx={{ marginX: 3 }}>
            <Typography fontFamily={"Poppins"}>Nom et prénom</Typography>
            <Typography
              textAlign={"center"}
              sx={{ color: "#494949" }}
              fontFamily={"Poppins"}
              fontSize={12}
            >
              Entreprise
            </Typography>
          </Grid>
          <Grid item>
            <Badge
              color="success"
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="images/Photo.png" />
            </Badge>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default NavBar;
