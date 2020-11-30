import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker";
import image from './../../img/iconCalendar.svg'

const FechaSiniestroDesk = ({
  onChange,
  daysFromState,
  monthFromState,
  yearFromState,
}) => {

  if(daysFromState?.toString().length === 1){
    daysFromState = ("0" + daysFromState).slice(-2)
  }
  if(monthFromState?.toString().length === 1){
    monthFromState = ("0" + monthFromState).slice(-2)
  }

  const [inputValue, setInputValue] = useState(() =>{
    return !daysFromState ? moment().format("DD-MM-YYYY") : `${daysFromState}-${monthFromState}-${yearFromState}`;
  });

  const comunClass = getComunStyle();

  const onDateChange = (date, value) => {
    setInputValue(value);
    if(value){
      let fechaSplit=value.split('-')
      onChange({ days:parseInt(fechaSplit[0]),month:parseInt(fechaSplit[1]), year:parseInt(fechaSplit[2])})
    }
    else
      onChange({days:0,month:0, year:0})
    
  };

  return (
    <>
      <div>
        <Grid
          className={comunClass.tituloTextBox}
        >
          Fecha de accidente
        </Grid>
      </div>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"es"}>
        <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
          <KeyboardDatePicker
            inputVariant="outlined"
            disableFuture
            format="DD-MM-YYYY"
            inputValue={inputValue}
            onChange={onDateChange}
            animateYearScrolling            
            disableToolbar  // seleccionar año
            InputAdornmentProps={{ position: 'start', paddingLeft: '6px'}}
            fullWidth
            invalidDateMessage="Formato invalido"
            keyboardIcon={<img alt="calendar" src={image} />}
      />
      </ThemeProvider>
      </MuiPickersUtilsProvider>          
    </>    
  );
};

export default FechaSiniestroDesk;
