import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import AutoComplete from "@material-ui/lab/Autocomplete";

const EditarDireccionSucursal = () => {
  const {
    addmissionForm: { step, percentage, sucursales, SucursalEmpresaObjeto },
  } = useSelector((state) => state, shallowEqual);
  const [sucursalEmpresa, setSucursalEmpresa] = useState(SucursalEmpresaObjeto);

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
        dispatch={() => dispatch(handleSetStep(5.5))}
        percentage={percentage}
      />
      <Typography className={pregunta} variant="h2">
        Ingresa dirección de la sucursal
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="h2">
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
        getOptionLabel={(option) => option?.direccion}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <div className={bottomElement}>
        <Button
          variant="contained"
          disabled={!sucursalEmpresa}
          className={buttonAchs}
          onClick={() => {
            dispatch(updateForm("SucursalEmpresa", sucursalEmpresa.nombre));
            dispatch(updateForm("SucursalEmpresaObjeto", sucursalEmpresa));
            dispatch(handleSetStep(5.1));
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default EditarDireccionSucursal;
