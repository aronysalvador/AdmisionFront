import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { TextField, Button } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";
import { getComunStyle } from "../../css/comun";
import Grid from "@material-ui/core/Grid";

const RutPaciente = () => {

    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const [rut, setRut] = useState(); 
    const [isValid, setIsValid] = useState(true);

  return (
    <div>
        <Grid className={comunClass.tituloTextBox}>
          RUT
        </Grid>
        <TextField
          type="text"
          value={rut}
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          helperText={!isValid && "RUT no válido"}              
          error={!isValid }
          onChange={(e) => {
            var format = formateaRut(e.target.value);
            setRut(format!==undefined ? format : e.target.value);       
            setIsValid(Rut.validaRut(format));   
          }}

        />
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={!rut || !isValid}
            onClick={() => {
                dispatch(updateForm("rut", rut));
                dispatch(handleSetStep(5)); 
            }}
          >
            Continuar
          </Button>
        </div>
    </div>
  );
};
export default RutPaciente;
