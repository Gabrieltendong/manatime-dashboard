import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type CardProps = {
  name: string;
  iconName: string;
};

const Card = ({ name, iconName }: CardProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #D4D4D4",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0.5,
        width: 170,
        height: 170,
        cursor: "pointer",
      }}
    >
      <Image
        width={70}
        height={70}
        alt={`${iconName}`}
        src={`images/${iconName}.svg`}
      />
      <Typography fontFamily={"Poppins"} mt={2}>
        {name}
      </Typography>
    </Box>
  );
};

export default Card;
