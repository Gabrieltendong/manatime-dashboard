import SubMenuItem from "@/components/ui/SubMenuItem";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ListModuleSoldes from "../ListModuleSoldes";
import AddSoldeForm from "../AddSoldeForm";

const MenuSoldes = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showAddSoldeForm, setShowAddSoldeForm] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
      <SubMenuItem text="Gestions des soldes" onClick={handleClick} />
      <SubMenuItem
        text="Ajuster un solde"
        onClick={() => setShowAddSoldeForm(true)}
      />
      <SubMenuItem text="Compteur" />
      <SubMenuItem text="Historique" />

      <ListModuleSoldes
        isOpen={open}
        anchorEl={anchorEl}
        handleClose={handleClick}
      />
      <AddSoldeForm
        isOpen={showAddSoldeForm}
        handleClose={() => setShowAddSoldeForm(false)}
      />
    </Box>
  );
};

export default MenuSoldes;
