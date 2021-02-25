import { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles";
import {defaultMaterialThemeKeyboardDatePicker} from "../../css/styleDatePicker";
import imageDate from './../../img/iconCalendar.svg'
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const NoPaddingDatePicker = withStyles({
    root: {
      '&& .MuiOutlinedInput-input': {
        padding: "8.5px 14px"
      }
    }
})(KeyboardDatePicker);

export default (props) => {
    const { date, setDate, id } = props

    const [ selectedDate, setSelectedDate ] = useState(date ? moment() : null);

    const onDateChange = (date, value) => {
        setSelectedDate(date);
        setDate(value);
    };

    return (
        <div style={{ zIndex: 9}}>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <ThemeProvider theme={defaultMaterialThemeKeyboardDatePicker}>
                <NoPaddingDatePicker
                    id={id}
                    inputVariant='outlined'
                    views={[ "year", "month" ]}
                    disableFuture
                    value={selectedDate}
                    format='MM-YYYY'
                    inputValue={date}
                    onChange={onDateChange}
                    autoComplete='off'
                    InputAdornmentProps={{ position: 'start'}}
                    fullWidth
                    invalidDateMessage='Formato invalido'
                    maxDateMessage='La fecha no puede exceder al día de hoy'
                    minDateMessage='La fecha es invalida'
                    keyboardIcon={<img alt='calendar' src={imageDate} />}
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