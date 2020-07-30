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

const Afp = () => {
  const {
    addmissionForm: { step, percentage, afpForm },
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
        value={afp}
        onChange={(event, value) => {
          setAFP(value);
        }}
        style={{ width: 300 }}
        options={afpList}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          isabled={!afp}
          onClick={() => {
            dispatch(updateForm("afpForm", afp));
            //dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Afp;
