import React from "react"; 
import { withFormik } from "formik";
import { connect } from "react-redux";
import { updateForm, handleSetStep } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Rut, formateaRut } from "../../helpers/rut";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import image from './../../img/identify.svg'

const form = (props) => {

  const {
    values,
    touched,
    errors,
    isSubmitting, 
    handleChange, 
    handleBlur,
    handleSubmit
  } = props;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <form onSubmit={handleSubmit}>
      <div className={comunClass.displayDesk}>
        <div className={comunClass.titlePrimaryDesk}>
          <Grid component="span" className={comunClass.textPrimaryDesk}>
            <Typography variant="p" component="p" className={comunClass.titleBlack2}>
              Empecemos completando <br /> algunos datos 
            </Typography>
          </Grid>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div>
          <Typography
            variant="h1"
            component="h1"
            className={[comunClass.titleBlack, comunClass.subtitleBlack]}
          >
            Ingresa el           
            <Grid component="span"  className={comunClass.titleBlue} style={{display: "contents"}}>
              &nbsp;RUT
            </Grid>
            &nbsp;del paciente{" "}
          </Typography>{" "}
        </div>{" "}
        <div className={spaceStyle.space2} />{" "}
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
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
              className={comunClass.borderBox}
              margin="dense"
              variant="outlined"
              fullWidth
              autoComplete="off"
              type="text"
            />
          </div>{" "}
        </div>
        <div className={spaceStyle.space12} />{" "}
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space4} />{" "}
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={isSubmitting}
            type="submit"
          >
            Continuar{" "}
          </Button>{" "}
        </div>{" "}
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
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
    props.dispatch(handleSetStep(5));  
  },
})(form);

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}
export default connect(mapStateToProps)(IdentificationForm);
