import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getRazonSocialPrincipal } from "./../../redux/actions/RazonSocialAction";

import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const Afp = () => {
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

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ¿A qué AFP o Previsión Social perteneces?
      </Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        AFP
      </Typography>
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

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Afp;
