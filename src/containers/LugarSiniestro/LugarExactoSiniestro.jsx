import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { LocationOn } from "@material-ui/icons";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getSucursalesEmpresaSiniestro } from "./../../redux/actions/SucursalesEmpresaSiniestro";

const LugarExactoSiniestro = () => {
  const dispatch = useDispatch();
  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { root, buttonAchs, pregunta } = getComunStyle();
  const { mobileLabel } = siniestroStyle();

  useEffect(() => {
    dispatch(getSucursalesEmpresaSiniestro(""));
  }, []);

  const { data: sucursalesList } = useSelector(
    (state) => state.sucursalesEmpresaSiniestro,
    shallowEqual
  );
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--step))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Señala el lugar exacto del accidente
      </Typography>

      <Typography className={mobileLabel}>Dirección accidente</Typography>
      <AutoComplete
        onChange={(event, value) => {
          console.log({ value });
        }}
        size="small"
        fullWidth
        options={sucursalesList}
        getOptionLabel={(option) => option.direccion}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <div
        onClick={() => {
          alert("xx");
        }}
      >
        <LocationOn />
      </div>
      <Button className={buttonAchs}>Siguiente</Button>
    </div>
  );
};

export default LugarExactoSiniestro;
