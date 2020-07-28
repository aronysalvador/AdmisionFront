import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography, TextField, Button } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import CardSucursal from "../../components/CardSucursal/CardSucursal";

const SeleccionarComuna = () => {
  const comunas = [
    { key: 13101, value: "Santiago Centro", parent: 13000 },
    { key: 13102, value: "Cerrillos", parent: 13000 },
    { key: 13103, value: "Cerro Navia", parent: 13000 },
    { key: 13104, value: "Conchalí", parent: 13000 },
    { key: 13105, value: "El Bosque", parent: 13000 },
    { key: 13106, value: "Estación Central", parent: 13000 },
    { key: 13107, value: "Huechuraba", parent: 13000 },
    { key: 13108, value: "Independencia", parent: 13000 },
    { key: 13109, value: "La Cisterna", parent: 13000 },
    { key: 13110, value: "La Florida", parent: 13000 },
    { key: 13111, value: "La Granja", parent: 13000 },
    { key: 13112, value: "La Pintana", parent: 13000 },
  ];
  const dispatch = useDispatch();
  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(8))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la comuna en donde trabajas
      </Typography>
      <div className={spaceStyle.space2}></div>
      <Typography className={tituloTextbox} variant="subtitle2">
        Comuna
      </Typography>
      <AutoComplete
        onChange={(event, value) => {
          console.log({ value });
        }}
        size="small"
        fullWidth
        options={comunas}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <div className={spaceStyle.space2}></div>
      <CardSucursal />
      <div className={bottomElement}>
        <Button className={buttonAchs} variant="contained" disabled={false}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default SeleccionarComuna;
