import React, { useState, useEffect } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { LocationOn } from "@material-ui/icons";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getSucursalesEmpresaSiniestro } from "./../../redux/actions/SucursalesEmpresaSiniestro";
import { getSpaceStyle } from "../../css/spaceStyle";

const RazonSocial = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro },
  } = useSelector((state) => state, shallowEqual);

  const [sucursal, setSucursal] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro;
  });
  const dispatch = useDispatch();

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
      <AutoComplete
        value={sucursal}
        onChange={(event, value) => {
          setSucursal(value);
        }}
        style={{ width: 300 }}
        options={sucursalesList}
        getOptionLabel={(option) => option.direccion}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
  );
};

export default RazonSocial;
