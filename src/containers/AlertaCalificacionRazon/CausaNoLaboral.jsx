import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

/*
REVISARE EL 
  const {
    addmissionForm: { percentage, afpForm },
  } = useSelector((state) => state, shallowEqual);
*/
const CausaNoLaboral = () => {
  const {
    addmissionForm: { percentage, razonAlertaForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [causas, setCausas] = useState(() => {
    return !razonAlertaForm ? "" : razonAlertaForm;
  });

  const dispatch = useDispatch();

  const { tipo: causasList } = useSelector(
    (state) => state.razonAlertaForm.data[0],
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(90.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la rázon de posible causa no laboral
      </Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        Selecciona
      </Typography>
      <AutoComplete
        value={causas}
        onChange={(event, value) => {
          setCausas(value);
        }}
        style={{ width: 300 }}
        options={causasList}
        getOptionLabel={(option) => option.nombre}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                paddingTop: "3px",
                paddingBottom: "3px",
                paddingLeft: "5xp",
                marginTop: "7px",
              },
            }}
          />
        )}
      />

      <div className={bottomElement}>
        <Button
          variant="contained"
          className={buttonAchs}
          disabled={!causas}
          onClick={() => {
            dispatch(updateForm("razonAlertaForm", causas));
            dispatch(handleSetStep(90.3));
          }}
        >
          Confirmar Alerta
        </Button>
      </div>
    </div>
  );
};

export default CausaNoLaboral;
