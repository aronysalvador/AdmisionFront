import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getValidar } from "../../redux/actions/SucursalesAction";

const IdentificationCompany = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { rutEmpresa }
  } = useSelector((state) => state, shallowEqual);

  const [ rut, setRut ] = useState(() => {
    return !rutEmpresa ? "" : rutEmpresa;
  });

  const [ isValid, setIsValid ] = useState(true);

  const validar = (isValid) => {
      dispatch(getValidar(isValid, rut));
  };

  return (
    <div>
      <TextField
        id={"RUTCompany-Lbl1"}
        type='text'
        value={rut}
        variant='outlined'
        size='small'
        margin='dense'
        fullWidth
        helperText={!isValid && "RUT no válido"}
        error={!isValid }
        onChange={(e) => {
          let format = formateaRut(e.target.value);
          setRut(format);
          setIsValid(Rut.validaRut(format));
        }}
        onBlur={() => validar(isValid)}
      />{" "}
    </div>
  );
};
export default IdentificationCompany;
