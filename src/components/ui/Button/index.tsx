"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import appColors from "@/styles/appColors";

type ButtonProps = {
  text: string;
  iconName: string;
};

const Button = ({ text, iconName }: ButtonProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      onClick={() => console.log("salut")}
      sx={{
        bgcolor: appColors.secondary,
        height: 66,
        paddingX: 3,
      }}
    >
      <Image
        width={20}
        height={20}
        alt={`${iconName}`}
        src={`/images/${iconName}.svg`}
      />
      <Typography ml={3} fontFamily={"Poppins"} color={"white"} fontSize={18}>
        {text}
      </Typography>
    </Box>
  );
};

export default Button;
