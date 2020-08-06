import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

const IdentificationCompany = (props) => {
    const dispatch = useDispatch();
    const {
        addmissionForm: { step, percentage, rutEmpresa },
    } = useSelector((state) => state, shallowEqual);

    const [rut, setRut] = useState(() => {
        return !rutEmpresa ? "" : rutEmpresa;
    });

    const [isValid, setIsValid] = useState(true);

    const validar = (id) => {
        if (isValid) {
            dispatch(updateForm("rutEmpresa", rut));
        }
    };

    return ( <
        div >
        <
        TextField value = { rut }
        variant = "outlined"
        size = "small"
        margin = "dense"
        fullWidth helperText = {!isValid && "RUT no válido" }
        error = {!isValid }
        onChange = {
            (e) => {
                //let rutFormateado = e.target.value
                //formateaRut(e.target.value)
                setIsValid(Rut.validaRut(formateaRut(e.target.value)));
                setRut(formateaRut(e.target.value));
            }
        }
        onBlur = {
            () => validar(rut) }
        /> <
        /div>
    );
};
export default IdentificationCompany;