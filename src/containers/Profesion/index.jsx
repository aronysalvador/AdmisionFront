import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getProfesion } from "./../../redux/actions/ProfesionAction";
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
const Profesion = () => {
  const {
    addmissionForm: { percentage, afpForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [afp, setAFP] = useState(() => {
    return !afpForm ? "" : afpForm;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfesion(""));
  }, []);

  const { data: afpList } = useSelector(
    (state) => state.profesionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(17.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la profesión que mejor se ajusta
      </Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        Profesión
      </Typography>
      <AutoComplete
        value={afp}
        onChange={(event, value) => {
          setAFP(value);
        }}
        style={{ width: 300 }}
        options={afpList}
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
          disabled={!afp}
          onClick={() => {
            dispatch(updateForm("afpForm", afp));
            dispatch(handleSetStep(90));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Profesion;
