import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker"; 
import ClearIcon from "@material-ui/icons/Clear";
import imageDate from './../../img/iconCalendar.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const NoPaddingDatePicker = withStyles({
    root: {
    '&& .MuiOutlinedInput-input': {
    padding: "8.5px 0px"
    },
    '&& .MuiOutlinedInput-adornedEnd': {
        paddingRight: "6px"
    },
    '&& .MuiOutlinedInput-adornedStart': {
        paddingLeft: "0px"
    }}
})(KeyboardDatePicker);

export default (props) => {
    
    const { date, setDate, id, setValidDate } = props

    const [selectedDate, setSelectedDate ] = React.useState(date ? moment() : null );   
    
    const onDateChange = (date, value) => {
        if(date){
            setSelectedDate(date);
            setDate(value);
            setValidDate(true)
        }else{
            setSelectedDate(date);
            setDate(value);
            setValidDate(false)
        }
    };

    return(        
        <div  style={{ zIndex: 9 }} >
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                    <NoPaddingDatePicker         
                        id={id}
                        inputVariant="outlined"
                        disableFuture   
                        value={selectedDate}
                        format="DD-MM-YYYY"
                        inputValue={date}
                        onChange={onDateChange} 
                        autoComplete="off"                              
                        animateYearScrolling       
                        InputAdornmentProps={{ position: 'start'}}
                        fullWidth
                        onError={(e)=>{if(e){ setValidDate(false) } }}
                        invalidDateMessage="Formato invalido"
                        maxDateMessage="La fecha no puede exceder al día de hoy"
                        minDateMessage="La fecha es invalida"
                        keyboardIcon={<img alt="calendar" src={imageDate}/>}
                        style={{
                            paddingTop: "3px",
                            background: "#ffff",
                            borderRadius: "0.7em"
                        }}
                        InputProps={{
                            endAdornment: (
                                <ClearIcon onClick={()=>{onDateChange(null,null)}} style={{cursor:'pointer'}} />
                            )
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>    
        </div>
    )
}