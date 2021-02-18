import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { Button, Grid } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
// import { getWelcomeStyle } from "../../css/welcomeStyle";
import Cabecera from "../../components/cabecera/index";
// import { setCenter } from "../../redux/actions/UserCenterAction";
import Header from "../../components/header/index";

const CentroPaciente = () => {
  const {
    addmissionForm: { percentage, centroPacienteForm }, microsoftReducer: { userMsal },
  } = useSelector((state) => state, shallowEqual);

  // const { email } = userMsal;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  // const welcomeStyle = getWelcomeStyle();

  const [centros, setCENTROS] = useState(() => {
    return !centroPacienteForm ? {} : centroPacienteForm; 
  });

  const [inputValue, setInputValue] = useState("");

  const [valueError, setValueError] = useState("");

  const dispatch = useDispatch();

  const { data: centrosList } = useSelector(
    (state) => state.centrosAchsForm,
    shallowEqual
  );

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={userMsal}/>
      </div>
      <div className={ comunClass.beginContainerDesk }> 
        <Cabecera id="CentroPaciente-BtnBack" dispatch={() => dispatch(handleSetStep(5.1))} percentage={percentage} noSpace={true} /> 
      </div>
      <div className={spaceStyle.space1} />
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div>
      <Grid  className={`${comunClass.titleBlack} ${comunClass.textCenterDesk}`}>El paciente se encuentra en:</Grid >
      <div className={comunClass.displayMobile}>
        <div className={spaceStyle.space2} />
      </div>

      <div className={comunClass.boxGeneral} >
        <center className={comunClass.displayDesk}>
          <div className={spaceStyle.space2} />
          <Grid className={comunClass.subtitleBlack}>
            Ingresa el centro donde se encuentra el paciente
          </Grid>
          <div className={spaceStyle.space1} />
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.space1} />
          </div>
        </center>
        <div className={comunClass.containerTextBox}>
          <Grid className={comunClass.tituloTextBox} for={"CentroPaciente-Lbl1"}>
            Centro
          </Grid>
          <AutoComplete
            id={"CentroPaciente-Lbl1"} 
            value={centros}
            onChange={(event, value) => {
              setCENTROS(value);
              value ? setValueError(value?.Centro_m)  : setValueError("");          
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
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
        <div className={comunClass.bottomElement}>
          <Button
            id={"CentroPaciente-Btn1"} 
            variant="contained"
            className={`${comunClass.buttonAchs} ${comunClass.bottomMargin}`}  
            type="submit"
            disabled={inputValue !== valueError || inputValue === ''}
            onClick={() => {
              dispatch(updateForm("centroPacienteForm", centros));
              // dispatch(setCenter(email, centros))
              dispatch(handleSetStep("x", 5.7));
            }}
          >
            Aquí estoy
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default CentroPaciente;
