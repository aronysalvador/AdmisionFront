import React from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getBlackTheme } from "../../css/blackTheme";

const HasScheduledMeet = (props) => {
  const { addmissionForm, dispatch } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  const cita = addmissionForm.cita ? addmissionForm.cita : {};

  return (
    <div className={blackStyle.root}>
      <div className={spaceStyle.space1} />
      <img
        alt="load"
        src="./static/error-siniestro.svg"
        className={blackStyle.img}
      />
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textWarning}
      >
        ¡Atención!
      </Typography>
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textMessage}
      >
        Este paciente tiene una cita agendada
      </Typography>
      <div className={spaceStyle.space1} />
      <div className={blackStyle.containerQuote}>
        {cita && (
          <>
            <div className={blackStyle.containerRowQuote}>
              <div className={blackStyle.itemDataQuote}>{cita.fecha}</div>
              <div className={blackStyle.itemLabelQuote}>Fecha</div>
              <div className={blackStyle.itemDataQuote}>{cita.hora}</div>
              <div className={blackStyle.itemLabelQuote} style={{marginBottom: "0"}}>Hora</div>
            </div>
            <hr style={{color: "#FFFFFF", margin: "0"}} />
            <div className={blackStyle.containerRowQuote}>
              <div className={blackStyle.itemDataQuote}>{cita.lugar}</div>
              <div className={blackStyle.itemLabelQuote}>Centro</div>
              <div className={blackStyle.itemDataQuote}>{cita.unidad}</div>
              <div className={blackStyle.itemLabelQuote} style={{marginBottom: "0"}}>Especialidad</div>
            </div>
          </>
        )}
        
      </div>

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
            if (addmissionForm.siniestros.length > 0) {
              const mensajeAlerta = "Este paciente ya tiene un siniestro";
              const mensajeBoton = "Ver su(s) siniestro(s)";
              const origen = "getRut";
              dispatch(
                updateForm("siniestroOpciones", {mensajeAlerta,mensajeBoton, origen})
              );
              dispatch(handleSetStep(5.83));
            } else {
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
