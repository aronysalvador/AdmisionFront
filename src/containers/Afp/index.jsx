import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getAFP } from "./../../redux/actions/AfpAction";
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
const Afp = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    bottomElement,
    tituloTextbox,
    titleBlack,
    titleBlue
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [afp, setAFP] = useState(() => {
    return !afpForm ? "" : afpForm;
  });

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getAFP(""));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);

  let back = responsable?.nombre.length > 0 ?  17.1 : 15

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(back))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Escribe la 
        <div className={titleBlue}>
          &nbsp;AFP o Previsión Social
        </div>
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
            dispatch(handleSetStep(19));
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Afp;
