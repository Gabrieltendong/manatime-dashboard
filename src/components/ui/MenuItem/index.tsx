"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Icon from "@mui/material/Icon";

import appColors from "@/styles/appColors";
import { ExpandMore } from "@mui/icons-material";

type MenuItemProps = {
  text: string;
  iconName: string;
  expanded: string | false;
  panel: string;
  handleChange: any;
  menu?: any;
};

const MenuItem = ({
  text,
  iconName,
  expanded,
  panel,
  handleChange,
  menu,
}: MenuItemProps) => {
  return (
    <Accordion
      expanded={expanded === panel}
      onChange={handleChange}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMore
            sx={{ color: expanded === panel ? appColors.primary : "white" }}
          />
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          bgcolor: expanded === panel ? "white" : appColors.primary,
          height: 66,
          paddingX: 3,
        }}
      >
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Icon
            sx={{ color: expanded === panel ? appColors.primary : "white" }}
          >
            {iconName}
          </Icon>
          <Typography
            ml={3}
            fontFamily={"Poppins"}
            color={expanded === panel ? appColors.primary : "white"}
            fontSize={14}
          >
            {text}
          </Typography>
        </Box>
      </AccordionSummary>
      {menu && (
        <AccordionDetails
          sx={{
            paddingX: 3,
          }}
        >
          {menu}
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default MenuItem;
