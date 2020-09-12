import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getCentros } from "./../../redux/actions/CentrosAchsAction";
import { handleLogUpdate } from "../../redux/actions/Log";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Cabecera from "../../components/cabecera/index";
import {setCenter} from "../../redux/actions/UserCenterAction";

const Achs = () => {
  const {
    addmissionForm: { centrosForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    microsoftReducer: { userMsal },
  } = useSelector((state) => state, shallowEqual);

 const { email } = userMsal;

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();

  const [centros, setCENTROS] = useState(centrosForm);

  const [inputValue, setInputValue] = useState("");

  const [valueError, setValueError] = useState("");

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

  const { LogForm: {ID} } = useSelector((state) => state, shallowEqual);

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
                
          value ? setValueError(value?.Centro_m)  : setValueError("");          
        
        }}
        freeSolo
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
        style={{ width: 300 }}
        options={centrosList}
        getOptionLabel={(option) => option.Centro_m}
        renderInput={(params) => (
          <TextField
            {...params}
            helperText={
              inputValue !== valueError  && valueError !== ''
                ? "Este centro no existe"
                : null
            }
            error={inputValue !== valueError && valueError !== ''}
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
         disabled={inputValue !== valueError || inputValue === ''}
          onClick={() => {
            dispatch(updateForm("centrosForm", centros));
            dispatch(setCenter(email, centros))
           if(ID>0){
              console.log("actualizar centro")
             dispatch(handleLogUpdate({opcion:3, Id: ID, centro: centros}));
            }else{
              console.log("not yet")
            }
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
