import React from 'react'
import { withFormik } from "formik";
import { connect } from 'react-redux'
import { saveRut } from '../../redux/actions/AdmissionAction'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import {Rut, formateaRut} from "../../helpers/rut"
import Typography from '@material-ui/core/Typography'
import {identificationStyle} from '../../components/share/style/identificationContentStyle'
import {comun} from '../../components/share/style/comun'

const form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  const classes = identificationStyle(); 
  const classesComun =  comun();
  const comunClass = comun(); 

  return (
    <form onSubmit={handleSubmit}>
      <div  className={classes.item1}>
        <Typography variant="p" component="p" className={classesComun.pregunta}>
          Ingresa el RUT del paciente
        </Typography>
      </div>
      <div  className={classes.item2} />
      <div  className={classes.item3}>
        <TextField
              id="rut"
              label="Rut"
              value={formateaRut(values.rut)}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.rut ? errors.rut : ""}
              error={touched.rut && Boolean(errors.rut)}
              margin="dense"
              variant="outlined"
              fullWidth
          />
      </div>
      <div  className={classes.item4} />
      <div  className={classes.item5}>
        <Button className={comunClass.boton} variant="contained" disabled={isSubmitting} type="submit">
              Continuar
        </Button>
      </div>
    </form>
  )}

const IdentificationForm = withFormik({

    mapPropsToValues: ({rut}) => {
      return {
        rut: rut || ""
      };
    },
    validate: (values) => {
      const errors = {}
      if (typeof values.rut !== 'undefined' && values.rut.length < 1) {
        errors.rut = 'Debe ingresar su RUT'
      }else if (!Rut.validaRut(formateaRut(values.rut))){
        errors.rut = 'El RUT ingresao no es valido';
      }        
      return errors
    },
    handleSubmit: (values, {props,setSubmitting}) => {
      setSubmitting = false
      values.rut = formateaRut(values.rut)
      props.dispatch(saveRut(Rut.clean(values.rut)))
    }
  })(form)

  function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
  }
export default connect(mapStateToProps)(IdentificationForm)