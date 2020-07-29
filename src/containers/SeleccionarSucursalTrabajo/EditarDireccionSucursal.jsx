import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import AutoComplete from "@material-ui/lab/Autocomplete";

const EditarDireccionSucursal = () => {
  const [sucursalEmpresa, setSucursalEmpresa] = useState();

  const {
    addmissionForm: { step, percentage, sucursales },
  } = useSelector((state) => state, shallowEqual);
  let stepx = step;
  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    pregunta,
    tituloTextbox,
    bottomElement,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--stepx))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Ingresa dirección de la sucursal
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        Dirección
      </Typography>
      <AutoComplete
        value={sucursalEmpresa}
        onChange={(event, value) => {
          setSucursalEmpresa(value);
        }}
        size="small"
        fullWidth
        options={sucursales}
        getOptionLabel={(option) => option.nombreSucursal}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() =>
            dispatch(updateForm("SucursalEmpresa", sucursalEmpresa))
          }
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default EditarDireccionSucursal;
