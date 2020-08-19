import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getCentros } from "./../../redux/actions/CentrosAchsAction";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Cabecera from "../../components/cabecera/index";

const Achs = () => {
  const {
    addmissionForm: { centrosForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();

  const [centros, setCENTROS] = useState(() => {
    return !centrosForm ? "" : centrosForm;
  });
  const [inputValue, setInputValue] = useState("");

  const [valueError, setValueError] = useState(() => {
    
    if(centrosForm == null)
      return false
 
    return !centrosForm ? "" : centrosForm?.nombre;
  });

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getCentros(""));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);

  const { data: centrosList } = useSelector(
    (state) => state.centrosAchsForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <div className={welcomeStyle.backPosicion}> 
          <Cabecera dispatch={() => dispatch(handleSetStep(0))} percentage={-1} noSpace={true} /> 
        </div>
      <Typography className={pregunta}>Te encuentras en:</Typography>
      <div className={spaceStyle.space2} />

      <Typography className={tituloTextbox} variant="subtitle2">
        Centro
      </Typography>
      <AutoComplete
        value={centros}
        onChange={(event, value) => {
          setCENTROS(value);
        
        
          value ? setValueError(value?.nombre)  : setValueError("");
          
        
        }}
        freeSolo
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
        style={{ width: 300 }}
        options={centrosList}
        getOptionLabel={(option) => option.nombre}
        renderInput={(params) => (
          <TextField
            {...params}
            helperText={
              inputValue !== valueError
                ? "Este centro no existe"
                : null
            }
            error={inputValue !== valueError}
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
          disabled={!centros || valueError === ''}
          onClick={() => {
            dispatch(updateForm("centrosForm", centros));
            dispatch(handleSetStep(1));
          }}
        >
          Aquí estoy
        </Button>
      </div>
    </div>
  );
};

export default Achs;
