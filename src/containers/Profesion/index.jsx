import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getProfesion } from "./../../redux/actions/ProfesionAction";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const Profesion = () => {
  const {
    addmissionForm: { percentage, profesionForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [profesion, setProfesion] = useState(() => {
    return !profesionForm ? "" : profesionForm;
  });

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getProfesion(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);


  const { data: profesionList } = useSelector(
    (state) => state.profesionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(19.2))}
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
        value={profesion}
        onChange={(event, value) => {
          setProfesion(value);
        }}
        style={{ width: 300 }}
        options={profesionList}
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
          disabled={!profesion}
          onClick={() => {
            dispatch(updateForm("profesionForm", profesion));
            dispatch(handleSetStep(20));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Profesion;
