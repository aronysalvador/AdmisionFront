import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getRazonSocialPrincipal } from "./../../redux/actions/RazonSocialAction";
import { updateForm } from "../../redux/actions/AdmissionAction";

const RazonSocial = () => {
  const {
    addmissionForm: { razonSocialForm,razonSocialobj },
  } = useSelector((state) => state, shallowEqual);

  const [razonSocial, setRazonSocial] = useState(() => {
    return razonSocialForm
  });

  const [razonSociaformlobj, setRazonSocialformobj] = useState(() =>{
    return razonSocialobj
  })

  const [valueError, setValueError] = useState(() => {
    
    if(razonSociaformlobj == null)
      return false

    return !razonSocialForm ? "" : razonSociaformlobj?.nombre;
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
      value={razonSociaformlobj}
      onChange={(event, value) => {
        setRazonSocialformobj(value);
        {
          value ? setValueError(value?.nombre) : setValueError("");
          dispatch(updateForm("razonSocialobj",value))
          dispatch(updateForm("razonSocialForm",value?.nombre))
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
