import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSucursales } from "../../redux/actions/SucursalesAction";
import Autocomplete from '@material-ui/lab/Autocomplete';

const RazonSocial = () => {
  const {
    addmissionForm: { razonSocial },
    microsoftReducer: {token}
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const [ open, setOpen ] = useState(false);
  const [ search, setSearch ] = useState("");

  const [ options, setOptions ] = useState([]);

    const loading = open && options.length === 0;

    const getData = async(newInputValue) => {
      setSearch(newInputValue)
      if (newInputValue){
        if (newInputValue.length % 4 === 0 && newInputValue !== search) {
          const test = await fetch(window.REACT_APP_RAZONSOCIAL+ newInputValue, {
            headers: {
              "x-access-token": token
            }
          }
        )
          const json = await test.json()
          let predictions = (Array.isArray(json.content?.response)) ? json.content.response : []
          setOptions(predictions)
        }
      }
    }

  return (
    <div style={{padding: "0"}}>
        <Autocomplete
          id={"RazonSocial-Lbl1"}
          value={razonSocial}
          style={{ width: '100%' }}
          size='small'
          fullWidth
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionLabel={(option) => option ? option.name : ""}
          options={options}
          loading={loading}
          getOptionSelected= {(
            option,
            value
          ) => value.value === option.value}
          onInputChange={(event, newInputValue) => {
            getData(newInputValue)
          }}
          onChange={(event, value) => {
            dispatch(getSucursales(value?.rut.replace(/\./g, '').toUpperCase()))
            dispatch(updateForm("razonSocial", value))
            dispatch(updateForm("razonSocialForm", value?.name))
            dispatch(updateForm("rutEmpresa", value?.rut));
          }
          }
          loadingText='cargando'
          renderInput={(params) => {
            return (
              <TextField
              {...params}
              style={{color: 'red'}}
              variant='outlined'
              // InputProps={{
              //   ...params.InputProps,
              //   endAdornment: (
              //     <>
              //       {loading ? <CircularProgress color="inherit" size={20} /> : null}
              //     </>
              //   ),
              // }}
              />
          ) }}

        />
    </div>
  );
};

export default RazonSocial;
