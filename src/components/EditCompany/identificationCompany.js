import React from "react";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import { Rut, formateaRut } from "../../helpers/rut";

const form = (props) => {
    const { values, touched, errors, handleChange, handleBlur } = props;

    return ( <
        TextField id = "rut"
        value = { formateaRut(values.rut) }
        onChange = { handleChange }
        onBlur = { handleBlur }
        helperText = { touched.rut ? errors.rut : "Ingresa el RUT de la empresa" }
        error = { touched.rut && Boolean(errors.rut) }
        margin = "dense"
        variant = "outlined"
        fullWidth /
        >
    );
};

const IdentificationCompany = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            rut: props.addmissionForm.rutEmpresa || "",
        };
    },
    validate: (values) => {
        const errors = {};
        if (typeof values.rut !== "undefined" && values.rut.length < 1) {
            errors.rut = "Debe ingresar su RUT";
        } else if (!Rut.validaRut(formateaRut(values.rut))) {
            errors.rut = "El RUT ingresado no es válido";
        }
        return errors;
    },
    handleBlur: (values, { props, setSubmitting }) => {
        setSubmitting = false;
        values.rut = formateaRut(values.rut);
        props.dispatch(updateForm("rutEmpresa", Rut.clean(values.rut)));
        //props.dispatch(handleSetStep(3))
    },
})(form);

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm: addmissionForm,
    };
}
export default connect(mapStateToProps)(IdentificationCompany);