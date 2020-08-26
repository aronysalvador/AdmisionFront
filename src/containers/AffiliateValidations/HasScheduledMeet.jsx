import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { makeStyles } from "@material-ui/core/styles";

const getUseStyles = makeStyles({
  container: {
    display: "flex",
    borderRadius: "10px",
    border: "1px solid #FFFFFF",
    width: "100%",
    padding: "10px",
    justifyContent: "space-evenly",
  },

  containerRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },

  itemData: {
    color: "#FFFFFF",
    fontSize: "1.125em",
    fontWeight: "bold"
  },

  itemLabel: {
    color: "#FFFFFF",
    fontSize: "1em",
    marginBottom: "15px"
  }
});

const HasScheduledMeet = (props) => {
  const { addmissionForm, dispatch } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  const styles = getUseStyles();

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
      <div className={styles.container}>
        {cita && (
          <>
            <div className={styles.containerRow}>
              <div className={styles.itemData}>{cita.fecha}</div>
              <div className={styles.itemLabel}>Fecha</div>
              <div className={styles.itemData}>{cita.hora}</div>
              <div className={styles.itemLabel} style={{marginBottom: "0"}}>Hora</div>
            </div>
            <hr style={{color: "#FFFFFF", margin: "0"}} />
            <div className={styles.containerRow}>
              <div className={styles.itemData}>{cita.lugar}</div>
              <div className={styles.itemLabel}>Centro</div>
              <div className={styles.itemData}>{cita.unidad}</div>
              <div className={styles.itemLabel} style={{marginBottom: "0"}}>Especialidad</div>
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
