import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getRazonSocialPrincipal } from "./../../redux/actions/RazonSocialAction";

const RazonSocial = () => {
  const {
    addmissionForm: {
      step,
      percentage,
      razonSocialForm,
      sucursalEmpresaSiniestro,
      empresa,
    },
  } = useSelector((state) => state, shallowEqual);

  const [razonSocial, setRazonSocial] = useState(() => {
    return !razonSocialForm ? empresa : razonSocialForm;
  });

  const [valueError, setValueError] = useState(() => {
    return !razonSocialForm ? "" : razonSocialForm.nombre;
  });
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRazonSocialPrincipal(""));
  }, []);

  const { data: razonSocialList } = useSelector(
    (state) => state.razonSocialForm,
    shallowEqual
  );

  return (
    <AutoComplete
      value={razonSocial}
      onChange={(event, value) => {
        setRazonSocial(value);
        {
          value ? setValueError(value.nombre) : setValueError("");
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      freeSolo
      style={{ width: 300 }}
      options={razonSocialList}
      getOptionLabel={(option) => option.nombre}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText={
            inputValue !== valueError
              ? "Razón Social no afiliada, ingresa un RUT"
              : null
          }
          error={inputValue !== valueError}
          variant="outlined"
        />
      )}
    />
  );
};

export default RazonSocial;
