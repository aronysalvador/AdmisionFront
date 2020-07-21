import React, {useState } from 'react'
import { withFormik } from "formik";
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import { Accordion } from '@material-ui/core';

const FormQuestion = props => {
  const {
    titulo,
    pregunta,
    placeholder,
    accion
  } = props;
  
  const [localValue, setLocalValue] = useState("")
  const onChangeHandler = event => {
    setLocalValue(event.target.value);
  };
  const classesComun =  getComunStyle()
  const spaceStyle = getSpaceStyle()

  const isDisabled = () =>{
    return localValue.length < 5;
  }

  return (
    <form onSubmit={ () => accion(localValue)}>
        <div>
            <Typography variant="h1" component="h1" className={classesComun.pregunta}>
                {titulo}
                    </Typography>
        </div>
        <div>
            <Typography variant="h2" component="h2" className={classesComun.pregunta}>
                
                {pregunta}
                    </Typography>
        </div>
        <div>
            <TextField
                id="txtRespuesta"
                placeholder= {placeholder}
                label=""
                value = {localValue}
                margin="dense"
                variant="outlined"
                fullWidth
                rows={4}
                multiline
                inputProps={{ maxLength: 200 }}
                onChange={onChangeHandler}
            /></div>
            <label className={classesComun.pullRight}>{localValue.length}/200</label>
      <div>
        <Button className={classesComun.buttonAchs} variant="contained"  type="submit" disabled={isDisabled()}> 
              Continuar
        </Button>
      </div>
    </form>
  )}

export default FormQuestion