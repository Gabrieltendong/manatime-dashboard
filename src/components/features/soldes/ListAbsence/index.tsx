import { list_absence } from "@/constants/list_absence";
import { remove_solde } from "@/store/features/soldes/solde.slice";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ListAbsence = () => {
  const { list_soldes } = useSelector((state: any) => state?.solde);
  const dispatch = useDispatch();

  const handleRemoveSolde = (id_solde: number) => {
    dispatch(remove_solde(id_solde));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Utilisateurs</TableCell>
            <TableCell align="left">Categories</TableCell>
            <TableCell align="left">Période</TableCell>
            <TableCell align="left">Solde actuel</TableCell>
            <TableCell align="left">Solde pris</TableCell>
            <TableCell align="left">Solde futur</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list_soldes.map((item: any) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography>{item.user_name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.category}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.periode}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.solde_actuel}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.solde_pris}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.solde_futur}</Typography>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item mr={3}>
                    <Box>
                      <Image
                        width={40}
                        height={40}
                        alt=""
                        src={"images/Ajuster.svg"}
                      />
                    </Box>
                  </Grid>
                  <Grid item mr={3}>
                    <Box>
                      <Image
                        width={40}
                        height={40}
                        alt=""
                        src={"images/Transferer.svg"}
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box onClick={() => handleRemoveSolde(item.id)}>
                      <Image
                        width={40}
                        height={40}
                        alt=""
                        src={"images/Solder.svg"}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListAbsence;
