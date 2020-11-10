import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core/styles';

import { createMuiTheme } from "@material-ui/core";

const HoraSiniestroDesk = ({
  onChange,
  horasFromState,
  indiceMinutosFromState,
  minutos,
}) => {

  const [inputValue2,setInputValue2]= useState(() =>{
    return  `${horasFromState}:${indiceMinutosFromState}0`;
  })

  const comunClass = getComunStyle();

  const onDateChange = (date, value) => {
    setInputValue2(value)
    if(value?.length){
      let horasDetails = value.split(':')
      let horas= parseInt(horasDetails[0])
      let minutos = parseInt(horasDetails[1])
      let indiceMinutos = parseInt(horasDetails[1].substr(0,1))
      
      if(horas && minutos && indiceMinutos){
        onChange({ horas, indiceMinutos, minutos});
      }
    }

  };


  const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: {
          main: "#007A33"
        },
    },
  });
  
  return (
    <>
      <div>
        <Grid
          className={comunClass.tituloTextBox}
        >
          Hora de accidente
        </Grid>
      </div>
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}  >
          <ThemeProvider theme={defaultMaterialTheme}>
            <KeyboardTimePicker
            inputVariant="outlined"
            inputValue={inputValue2}
            onChange={onDateChange}
            InputAdornmentProps={{ position: 'start'}}
            clearable
            ampm={false}
            fullWidth
            invalidDateMessage="Formato invalido"
            keyboardIcon={
              <svg width="18" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 10.25C19.5 15.359 15.359 19.5 10.25 19.5C5.141 19.5 1 15.359 1 10.25C1 5.141 5.141 1 10.25 1C15.359 1 19.5 5.141 19.5 10.25Z" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.6821 13.1917L9.91211 10.9427V6.0957" stroke="#787878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
  
          />
          </ThemeProvider>
        </MuiPickersUtilsProvider>   
    </div>    
    </>    
  );
};

export default HoraSiniestroDesk;
