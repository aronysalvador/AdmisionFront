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
  minutos,
  textLabel
}) => {

  if(horasFromState?.toString().length === 1){
    horasFromState = ("0" + horasFromState).slice(-2)
  }

  const [inputValue2,setInputValue2]= useState(() =>{
    if(!horasFromState){
      let time = new Date(new Date().setHours(new Date().getHours()-1))
      return `${(time.getHours() < 10)?"0"+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?"0"+time.getMinutes():time.getMinutes()}`;
    }else
      return `${horasFromState}:${minutos}`;
  })

  const comunClass = getComunStyle();

  const onDateChange = (date, value) => {
    console.log(value)
    setInputValue2(value?value:"")
    if(value?.length){
      let horas = -1;
      let minutos = -1;

      let horasDetails = value.split(':')
      console.log(horasDetails[0])
      if(horasDetails[0].includes("_"))
        horas = -1;

      
      else
        horas = parseInt(horasDetails[0])

      if(horasDetails[1].includes("_")){
        minutos = -1
      }
      else if(parseInt(horasDetails[1]) >= 0 && parseInt(horasDetails[1]) <= 59){
        minutos = parseInt(horasDetails[1])
      }
  
      onChange({ horas, minutos});

    }
  };

  return (
    <>
      <div>
        <Grid
          className={comunClass.tituloTextBox}
        >
          {textLabel}
        </Grid>
      </div>
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}  >
          <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
            <KeyboardTimePicker
            inputVariant="outlined"
            value={new Date(inputValue2)}
            inputValue={inputValue2}
            onChange={onDateChange}
            InputAdornmentProps={{ position: 'start'}}

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
