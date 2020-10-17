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
import { setCenter } from "../../redux/actions/UserCenterAction";
import Header from "../../components/header/index";
import { logout } from "../../redux/actions/microsoft.action";


const Achs = () => {
  const {
    addmissionForm: { centrosForm },
  } = useSelector((state) => state, shallowEqual);

  const {
    microsoftReducer: { userMsal },
  } = useSelector((state) => state, shallowEqual);

 const { email } = userMsal;

  const comunStyle = getComunStyle();
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


  return (
    <div className={comunStyle.root}>
      <div className={comunStyle.header}> 
      <Header
        dispatch={() => dispatch(logout())}
        userMsal={userMsal}
      />
      </div>
      <div className={ welcomeStyle.backPosicion }> 
        <Cabecera dispatch={() => dispatch(handleSetStep(0))} percentage={-1} noSpace={true} /> 
      </div>
      <div className={spaceStyle.space1} />
      <Typography className={[comunStyle.titleBlack, comunStyle.textCenterDesk]}>Te encuentras en:</Typography>
      <div className={spaceStyle.space2} />

      <div className={comunStyle.boxGeneral} >
        <center className={comunStyle.displayDesk}>
          <div className={spaceStyle.space2} />
          <Typography className={comunStyle.subtitleBlack} variant="subtitle2">
            Ingresa el centro en el cual trabajas
          </Typography>
          <div className={spaceStyle.space2} />
        </center>
        <div className={comunStyle.paddingElement}>
          <Typography className={comunStyle.tituloTextbox} variant="subtitle2">
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
            // style={{ width: 300 }}
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
        </div>
        <div className={[comunStyle.bottomElement]}>
          <Button
            variant="contained"
            className={[comunStyle.buttonAchs, comunStyle.bottomMargin]}  
            type="submit"
            disabled={inputValue !== valueError || inputValue === ''}
            onClick={() => {
              dispatch(updateForm("centrosForm", centros));
              dispatch(setCenter(email, centros))
              dispatch(handleSetStep(1));
            }}
          >
            Aquí estoy
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Achs;
