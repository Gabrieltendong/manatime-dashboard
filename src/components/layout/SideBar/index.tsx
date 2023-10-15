"use client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.css";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import MenuItem from "@/components/ui/MenuItem";
import MenuSoldes from "@/components/features/soldes/Menu";

const SideBar = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log("test");
    };

  return (
    <Grid item sx={{ position: "fixed", height: "100%" }}>
      <div className={styles.container}>
        <div className={styles.menu_burger_wrapper}>
          <Image
            height={30}
            width={30}
            alt="burger menu"
            src={"images/Burger_button.svg"}
          />
        </div>
        <Button text="Accueil" iconName="Accueil" />
        <Divider />
        <Button text="Ajouter" iconName="Add" />
        <MenuItem
          text="Mon espace"
          iconName="person"
          expanded={expanded}
          panel="panel1"
          handleChange={handleChange("panel1")}
        />
        <Divider />
        <MenuItem
          text="Validation"
          panel="panel2"
          iconName="check"
          expanded={expanded}
          handleChange={handleChange("panel2")}
        />
        <Divider />
        <MenuItem
          text="Indicateur"
          panel="panel3"
          iconName="list"
          expanded={expanded}
          handleChange={handleChange("panel3")}
        />
        <Divider />
        <MenuItem
          text="Soldes"
          panel="panel4"
          iconName="balance"
          expanded={expanded}
          menu={<MenuSoldes />}
          handleChange={handleChange("panel4")}
        />
        <Divider />
        <MenuItem
          text="Recheche"
          panel="panel5"
          iconName="search"
          expanded={expanded}
          handleChange={handleChange("panel5")}
        />
      </div>
    </Grid>
  );
};

export default SideBar;
