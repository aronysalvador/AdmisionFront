import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import specialBlue from "./../../util/color/specialBlue";
import { createMuiTheme } from "@material-ui/core";


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

  const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: specialBlue,
    },

  });

  const onDateChange = (date, value) => {
    setInputValue(value);
    let fechaSplit=value.split('-')
    onChange({ days:parseInt(fechaSplit[0]),month:parseInt(fechaSplit[1]), year:parseInt(fechaSplit[2])})
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
        <ThemeProvider theme={defaultMaterialTheme}>
          <KeyboardDatePicker
            inputVariant="outlined"
            disableFuture
            format="DD-MM-YYYY"
            inputValue={inputValue}
            onChange={onDateChange}
            animateYearScrolling            
            disableToolbar  // seleccionar año
            InputAdornmentProps={{ position: 'start'}}
            fullWidth
            invalidDateMessage="Formato invalido"
            keyboardIcon={
            <svg  width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9V11H4V9H6ZM10 9V11H8V9H10ZM14 9V11H12V9H14ZM16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H3V0H5V2H13V0H15V2H16ZM16 18V7H2V18H16ZM6 13V15H4V13H6ZM10 13V15H8V13H10ZM14 13V15H12V13H14Z" fill="#787878"/>
            </svg>}

      />
      </ThemeProvider>
      </MuiPickersUtilsProvider>          
    </>    
  );
};

export default FechaSiniestroDesk;
