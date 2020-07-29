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

  const [valueError, setValueError] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro.direccion;
  });
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch();

  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    dispatch(getSucursalesEmpresaSiniestro(""));
  }, []);

  const { data: sucursalesList } = useSelector(
    (state) => state.sucursalesEmpresaSiniestro,
    shallowEqual
  );


  return (
      <AutoComplete
        value={sucursal}
        onChange={(event, value) => {
          setSucursal(value);
          {value ? setValueError(value.direccion) : setValueError('')}
          
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        freeSolo
        style={{ width: 300 }}
        options={sucursalesList}
        getOptionLabel={(option) => option.direccion}
        renderInput={(params) => 
            <TextField 
            {...params}
            helperText={inputValue !== valueError?  "Razón Social no afiliada, ingresa un RUT": null}
            error= { inputValue !== valueError}
            variant="outlined" 
            />}
      />
  );
};

export default RazonSocial;
