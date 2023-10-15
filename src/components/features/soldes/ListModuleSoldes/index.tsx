import Card from "@/components/ui/Card";
import { list_module_soldes } from "@/constants/list_modules_soldes";
import { Box, Grid, Popover } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./style.module.css";

type ListModuleSoldesProps = {
  isOpen: boolean;
  anchorEl: any;
  handleClose: any;
};

const ListModuleSoldes = ({
  isOpen,
  anchorEl,
  handleClose,
}: ListModuleSoldesProps) => {
  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{
        maxHeight: "100%",
        marginLeft: 3,
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box sx={{ height: "100vh", bgcolor: "#fff", width: "40vw", p: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image width={300} height={300} alt="logo" src={"/images/Logo.svg"} />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
          {list_module_soldes.map(({ name, iconName }) => (
            <Card name={name} iconName={iconName} />
          ))}
        </Box>
      </Box>
    </Popover>
  );
};

export default ListModuleSoldes;
