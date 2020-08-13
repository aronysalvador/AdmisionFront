import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";

const HasScheduledMeet = (props) => {
  const { addmissionForm, dispatch } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div className={blackStyle.root}>
      <div className={spaceStyle.space2} />
        <img
          alt="load"
          src="./static/error-siniestro.svg"
          className={blackStyle.img}
        />
      <div className={spaceStyle.space3} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textWarning}
      >
       ¡Atención!
      </Typography>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textMessage}
      >
        Este paciente tiene una cita agendada
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textFinal}
      >
        Atiéndelo usando SAP
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
          className={blackStyle.buttonFooter}
          onClick={() => {
            dispatch(handleSetStep(5.9));
          }}
        >
          Continuar en SAP
        </Button>
        <Button
          className={blackStyle.buttonFooter2}
          onClick={() => {
            if(addmissionForm.siniestros.length > 0) {
              dispatch(handleSetStep(5.83));
            }
            else {              
              dispatch(handleSetStep(5.1));
            }
          }}
        >
          Crear nueva admisión
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(HasScheduledMeet);
