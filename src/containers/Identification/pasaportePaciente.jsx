import React from "react";
import { useDispatch } from "react-redux";
import { handleSetStep} from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Typography from "@material-ui/core/Typography";

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
          src="./static/validandoAlerta.png"
          style={{width:'146px'}}
        />
      </center>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        // gutterBottom
        className={comunClass.textErrorP2}
      >
        Ups! Todavía no tenemos construido este camino
      </Typography>

      <Typography
        color="textSecondary"
        // gutterBottom
        className={comunClass.textErrorS}
      >
        Por favor ingresa por Sap
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
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
