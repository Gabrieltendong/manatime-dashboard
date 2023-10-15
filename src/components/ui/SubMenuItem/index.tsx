import { Box, Typography } from "@mui/material";
import React from "react";

type SubMenuItemProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const SubMenuItem = ({ text, onClick }: SubMenuItemProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: 40,
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Typography textAlign={"end"}>{text}</Typography>
    </Box>
  );
};

export default SubMenuItem;
