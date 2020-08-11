import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getAFP } from "./../../redux/actions/AfpAction";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

import { sendCentroAchs } from "../../redux/actions/AdmissionAction";

/*
REVISARE EL 
  const {
    addmissionForm: { percentage, afpForm },
  } = useSelector((state) => state, shallowEqual);
*/
const Achs = () => {
  const {
    addmissionForm: { percentage, afpForm, centroAchs },
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
    dispatch(getAFP(""));
  }, []);

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);

  //State

  const nombre = useState(() => {
    return !centroAchs ? "" : centroAchs.nombre;
  });

  const clickSendAchs = () => {
    dispatch(sendCentroAchs(nombre));
    dispatch(updateForm("achsForm", nombre));
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Te encuentras en: 
      </Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        Centro
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
          type="submit"
          disabled={!afp}
          onClick={() => {
            clickSendAchs()
            dispatch(handleSetStep(41));
          }}
        >
          Aquí estoy
        </Button>
      </div>
    </div>
  );
};

export default Achs;
