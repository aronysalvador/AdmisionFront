import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardTimePicker} from "../../css/styleTimePicker";
import image from './../../img/iconClock.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const NoPaddingPicker = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 5px"
      }
    }
})(KeyboardTimePicker);

export default (props) => {
    const { time, setTime, id, open } = props

    const [ selectedDate, setSelectedDate ] = React.useState(time ? moment() : null);

    const onDateChange = (date, value) => {
        setSelectedDate(date);
        setTime(value);
    };

    return (
        <div style={{ zIndex: 9}}>
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={defaultMaterialThemeKeyboardTimePicker}>
                    <NoPaddingPicker
                        open={open?open:false}
                        id={id}
                        value={selectedDate}
                        format='HH:mm'
                        inputValue={time}
                        onChange={onDateChange}
                        inputVariant='outlined'
                        InputAdornmentProps={{ position: 'start'}}
                        ampm={false}
                        autoComplete='off'
                        fullWidth
                        invalidDateMessage='Formato invalido'
                        keyboardIcon={<img alt='clock' src={image} />}
                        style={{
                            paddingTop: "3px",
                            background: "#ffff"
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </div>
    )
}