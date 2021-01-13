import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker"; 
import image from './../../img/iconClock.svg'
import ClearIcon from "@material-ui/icons/Clear";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const NoPaddingPicker = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 0px"
      }
    }
})(KeyboardTimePicker);

export default (props) => {
    
    const { time, setTime, id, setValidHour, open } = props
    
    const [selectedDate, setSelectedDate] = React.useState(time ? moment() : null);
    
    const onDateChange = (date, value) => {
        if(date){
            setSelectedDate(date);
            setTime(value);
            setValidHour(true)
        }else{
            setSelectedDate(date);
            setTime(value);
            setValidHour(false)
        }
    };

    return(        
        <div style={{ zIndex: 9}} >
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}  >
                    <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                        <NoPaddingPicker 
                                open={open?open:false}  
                                id={id}                            
                                value={selectedDate}
                                format="HH:mm"
                                inputValue={time}
                                onChange={onDateChange}                                         
                                inputVariant="outlined"                            
                                InputAdornmentProps={{ position: 'start'}}
                                ampm={false}
                                autoComplete="off" 
                                fullWidth
                                onError={(e)=>{if(e){ setValidHour(false) } }}
                                invalidDateMessage="Formato invalido"
                                keyboardIcon={<img alt="clock" src={image} />}
                                style={{
                                    paddingTop: "3px",
                                    background: "#ffff",
                                    borderRadius: "0.7em"
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <ClearIcon onClick={()=>onDateChange(null,null)} style={{cursor:'pointer'}} />
                                    )
                                }}
                        />
                    </ThemeProvider>
            </MuiPickersUtilsProvider>     
        </div>
    )
}