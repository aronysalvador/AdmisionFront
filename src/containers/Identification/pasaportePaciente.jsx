import React from "react";
import { useDispatch } from "react-redux";
import { handleSetStep} from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import image from './../../img/exito.svg'

const PasaportePaciente = () => {

    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

  return (
    <div>
      <div className={spaceStyle.space1} />
      <center>
        <img
          alt="pasaporte"
          src={image} //validandoAlerta.png"
          className={comunClass.imgPass}
        />
      </center>
      <div className={spaceStyle.space1} />
      <Grid className={comunClass.textErrorP2}>
        Ups! Todavía no tenemos construido este camino
      </Grid>

      <Grid className={comunClass.textErrorS}>
        Por favor ingresa por Sap
      </Grid>
      <div className={comunClass.bottomElement}>
        <Button
          id={"PasaportePaciente-Btn1"}
          className={comunClass.buttonAchs2}
          variant="contained"
          onClick={() => dispatch(handleSetStep(5.9))}
        >
          Continuar en SAP
        </Button>
      </div>
    </div>
  );
};
export default PasaportePaciente;
