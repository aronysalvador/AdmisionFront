import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getSucursalesEmpresaSiniestro } from "./../../redux/actions/SucursalesEmpresaSiniestro";

const RazonSocial = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro, empresa },
  } = useSelector((state) => state, shallowEqual);

  const [sucursal, setSucursal] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro;
  });

  const [valueError, setValueError] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro.direccion;
  });
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch();


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
