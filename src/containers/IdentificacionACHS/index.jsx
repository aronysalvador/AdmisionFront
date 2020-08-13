import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getCentros } from "./../../redux/actions/CentrosAchsAction";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";


const Achs = () => {
  const {
    addmissionForm: { percentage, centrosForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [centros, setCENTROS] = useState(() => {
    return !centrosForm ? "" : centrosForm;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCentros(""));
  }, []);

  const { data: centrosList } = useSelector((state) => state.centrosAchsForm, shallowEqual);

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
        value={centros}
        onChange={(event, value) => {
          setCENTROS(value);
        }}
        style={{ width: 300 }}
        options={centrosList}
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
          disabled={!centros}
          onClick={() => {
            dispatch(updateForm("centrosForm", centros));
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
