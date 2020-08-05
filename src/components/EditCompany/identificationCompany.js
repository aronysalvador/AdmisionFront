import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";

const IdentificationCompany = (props) => {
  const {rutEmpresaForm,setRutEmpresaForm} = props

  const [isValid, setIsValid] = useState(true);

  return (
    <div>
      <TextField
        value={rutEmpresaForm}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={!isValid && "RUT no válido"}
        error={!isValid}
        onKeyPress={(e) => {
          //let rutFormateado = e.target.value
          //setIsValid(Rut.validaRut(rutFormateado));
          setRutEmpresaForm(e.target.value);
        }}
      />
    </div>
  );
};
export default IdentificationCompany;