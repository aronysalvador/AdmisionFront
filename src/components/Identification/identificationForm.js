import React from "react"; 
import { withFormik } from "formik";
import { connect } from "react-redux";
import { updateForm, handleSetStep } from "../../redux/actions/AdmissionAction";
import { handleLogUpdate } from "../../redux/actions/Log";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Rut, formateaRut } from "../../helpers/rut";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";


const form = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting, 
    handleChange, 
    handleBlur,
    handleSubmit,
  } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();



  return (

    <form onSubmit={handleSubmit}>
      <div>
        <Typography
          variant="h1"
          component="h1"
          className={classesComun.titleBlack}
        >
          Ingresa el           
              <Grid component="span"  className={classesComun.titleBlue} style={{display: "contents"}}>
                  &nbsp;RUT
              </Grid>
              &nbsp;del paciente{" "}
        </Typography>{" "}
      </div>{" "}
      <div className={spaceStyle.space2} />{" "}


      <Typography className={classesComun.tituloTextbox}>
        RUT
      </Typography>
      <div>
        <TextField
          id="rut"
          value={values.rut}
          onChange={(e)=>{  if(e.currentTarget.value.length > 1){ e.currentTarget.value=formateaRut(e.currentTarget.value); handleChange(e) }else{ handleChange(e) } } }
          
          onBlur={handleBlur}
          helperText={touched.rut ? errors.rut : ""}
          error={touched.rut && Boolean(errors.rut)}
          className={classesComun.borderBox}
          margin="dense"
          variant="outlined"
          fullWidth
          autoComplete="off"
          type="text"
        />
      </div>{" "}
      <div className={spaceStyle.space12} />{" "}
      <div className={spaceStyle.space4} />{" "}
      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          Continuar{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

const IdentificationForm = withFormik({
  mapPropsToValues: ({ rut }) => {
    return {
      rut: rut || "",
    };
  },
  validate: (values) => {
    const errors = {};
    if (typeof values.rut !== "undefined" && values.rut.length < 1) {
      errors.rut = "Debe ingresar el RUT del Paciente";
    } else if (!Rut.validaRut(formateaRut(values.rut))) {
      errors.rut = "Ingresa un RUT válido";
    }
    return errors;
  },
  handleChange: (value) => {
    console.log(value)
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting = false;
    values.rut = formateaRut(values.rut);
    var rut = Rut.clean(values.rut)
    props.dispatch(updateForm("rut", rut));
    props.dispatch(handleLogUpdate({opcion:2, Id: props.Id, Rut: rut}));
    props.dispatch(handleSetStep(5));
  },
})(form);

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}
export default connect(mapStateToProps)(IdentificationForm);
