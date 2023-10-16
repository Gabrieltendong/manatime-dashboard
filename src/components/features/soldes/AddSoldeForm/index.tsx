import { list_users } from "@/constants/list_users";
import { create_solde } from "@/store/features/soldes/solde.slice";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "50%",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

type AddSoldeFormProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Inputs = {
  user_name: string;
  category: string;
  periode: string;
  solde_actuel: number;
  solde_pris: number;
  solde_futur: number;
};

const AddSoldeForm = ({ isOpen, handleClose }: AddSoldeFormProps) => {
  const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("object", data);
    const dataForm = {
      ...data,
      id: new Date().getTime(),
    };
    dispatch(create_solde(dataForm));
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5">Ajouter un solde</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            fullWidth
            sx={{ mt: 3 }}
            {...register("user_name", { required: true })}
            error={!!errors.user_name}
          >
            <InputLabel id="demo-simple-select-label">Utilisateur</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name"
              name="user_name"
              onChange={(event: SelectChangeEvent) =>
                setName(event.target.value)
              }
            >
              {list_users.map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.user_name && (
            <Typography variant="caption" color={"red"}>
              Ce champ est obligatoire
            </Typography>
          )}
          <FormControl
            fullWidth
            sx={{ mt: 3 }}
            {...register("category", { required: true })}
          >
            <Typography>Categories</Typography>
            <InputBase
              name="category"
              sx={{
                border: "1px solid black",
                borderRadius: 2,
                pl: 1,
                height: 40,
              }}
            />
          </FormControl>
          {errors.category && (
            <Typography variant="caption" color={"red"}>
              Ce champ est obligatoire
            </Typography>
          )}
          <FormControl
            fullWidth
            sx={{ mt: 3 }}
            {...register("periode", { required: true })}
          >
            <Typography>Periode</Typography>
            <InputBase
              type="date"
              name="periode"
              sx={{
                border: "1px solid black",
                borderRadius: 2,
                pl: 1,
                height: 40,
              }}
            />
          </FormControl>
          {errors.periode && (
            <Typography variant="caption" color={"red"}>
              Ce champ est obligatoire
            </Typography>
          )}
          <Grid container>
            <Grid item>
              <FormControl
                fullWidth
                sx={{ mt: 3 }}
                {...register("solde_actuel", { required: true })}
              >
                <Typography>Solde actuel</Typography>
                <InputBase
                  type="number"
                  name="solde_actuel"
                  sx={{
                    border: "1px solid black",
                    borderRadius: 2,
                    pl: 1,
                    height: 40,
                  }}
                />
              </FormControl>
              {errors.solde_actuel && (
                <Typography variant="caption" color={"red"}>
                  Ce champ est obligatoire
                </Typography>
              )}
            </Grid>
            <Grid item ml={3}>
              <FormControl
                fullWidth
                sx={{ mt: 3 }}
                {...register("solde_pris", { required: true })}
              >
                <Typography>Solde pris</Typography>
                <InputBase
                  type="number"
                  name="solde_pris"
                  sx={{
                    border: "1px solid black",
                    borderRadius: 2,
                    pl: 1,
                    height: 40,
                  }}
                />
              </FormControl>
              {errors.solde_pris && (
                <Typography variant="caption" color={"red"}>
                  Ce champ est obligatoire
                </Typography>
              )}
            </Grid>
            <Grid item ml={3}>
              <FormControl
                fullWidth
                sx={{ mt: 3 }}
                {...register("solde_futur", { required: true })}
              >
                <Typography>Solde futur</Typography>
                <InputBase
                  type="number"
                  name="solde_futur"
                  sx={{
                    border: "1px solid black",
                    borderRadius: 2,
                    pl: 1,
                    height: 40,
                  }}
                />
              </FormControl>
              {errors.solde_futur && (
                <Typography variant="caption" color={"red"}>
                  Ce champ est obligatoire
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container mt={4}>
            <Grid item>
              <Button variant="outlined" onClick={handleClose}>
                Annuler
              </Button>
            </Grid>
            <Grid item ml={3}>
              <Button variant="contained" type="submit">
                Ajouter
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default AddSoldeForm;
