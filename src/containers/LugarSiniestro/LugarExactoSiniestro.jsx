import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { LocationOn } from "@material-ui/icons";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getSucursalesEmpresaSiniestro } from "./../../redux/actions/SucursalesEmpresaSiniestro";
import { getSpaceStyle } from "../../css/spaceStyle";

const LugarExactoSiniestro = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro },
  } = useSelector((state) => state, shallowEqual);

  const [sucursal, setSucursal] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro;
  });
  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    pregunta,
    tituloTextbox,
    bottomElement,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    dispatch(getSucursalesEmpresaSiniestro(""));
  }, []);

  const { data: sucursalesList } = useSelector(
    (state) => state.sucursalesEmpresaSiniestro,
    shallowEqual
  );

  const [isLugarExactoAccidenteValid, setLugarExactoAccidente] = useState(true);

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Señala el lugar exacto del accidente
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        Direcci&oacute;n accidente
      </Typography>
      <AutoComplete
        value={sucursal}
        onChange={(event, value) => {
          setSucursal(value);
        }}
        size="small"
        fullWidth
        options={sucursalesList}
        getOptionLabel={(option) => option.direccion}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />

      <LocationOn />
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
        disabled={!sucursal || !isLugarExactoAccidenteValid}
        onClick={() => {
            dispatch(updateForm("sucursalEmpresaSiniestro", sucursal));
            dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default LugarExactoSiniestro;
