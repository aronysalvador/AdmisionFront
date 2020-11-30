import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core/styles';
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker";
import image from './../../img/iconClock.svg'

const HoraSiniestroDesk = ({
  onChange,
  horasFromState,
  indiceMinutosFromState,
  minutos,
}) => {

  if(horasFromState?.toString().length === 1){
    horasFromState = ("0" + horasFromState).slice(-2)
  }

  const [inputValue2,setInputValue2]= useState(() =>{
    return !horasFromState? "" : `${horasFromState}:${indiceMinutosFromState}0`;
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
          <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
            <KeyboardTimePicker
            inputVariant="outlined"
            inputValue={inputValue2}
            onChange={onDateChange}
            InputAdornmentProps={{ position: 'start'}}
            clearable
            ampm={false}
            fullWidth
            invalidDateMessage="Formato invalido"
            keyboardIcon={<img alt="clock" src={image} />}
  
          />
          </ThemeProvider>
        </MuiPickersUtilsProvider>   
    </div>    
    </>    
  );
};

export default HoraSiniestroDesk;
