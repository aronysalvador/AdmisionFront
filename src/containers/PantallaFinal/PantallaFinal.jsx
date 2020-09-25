import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import IndiciacionesPacientes from "../../components/Indicaciones";
import CajaRutSiniestro from "./CajaRutSiniestro";

const PantallaFinal = (props) => {
  const { dispatch, microsoftReducer, addmissionForm } = props;
  const { siniestroID, rut } = addmissionForm;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={comunStyle.rootBegin}>
      <div className={welcomeStyle.beginContainer}>
        
          <div className={welcomeStyle.avatarContainerRight}>
            <Avatar className={welcomeStyle.avatar}>
              {microsoftReducer.userMsal.iniciales}
            </Avatar>
          </div>

        <div className={spaceStyle.space6} />
        <div className={welcomeStyle.TextContainer}>
          <img
            alt="Excelente"
            src="static/icon-check.png"
            className={welcomeStyle.iconCircular}
          />
          <div className={spaceStyle.spaceMin1} />
          <Typography
            variant="h1"
            component="h1"
            className={welcomeStyle.titleBegin}
          >
            Accidente ingresado
          </Typography>
        </div>
        <div className={spaceStyle.space2} />
        <div className={welcomeStyle.rutSiniestroContainer}>
          <CajaRutSiniestro
            textoPrincipal={siniestroID}
            textoSecundario="ID Siniestro"
          />
          <CajaRutSiniestro
            textoPrincipal={rut}
            textoSecundario="Rut Paciente"
          />
        </div>
        <div className={spaceStyle.space2} />
        <Typography
          variant="h5"
          component="h5"
          className={welcomeStyle.subTitleBegin}
        >
          Luego de la firma pide al paciente:
        </Typography>

        <IndiciacionesPacientes
          indicaciones={[
            {
              icono: "espera.svg",
              textoPrimario: "Esperar en sala",
              textoSecundario: "al llamado del doctor",
              clase: welcomeStyle.divRowBottom,
            },
            // {
            //   icono: "sms.svg",
            //   textoPrimario: "Recordarle su número SGP",
            //   textoSecundario: " y el modo de conectarse al WI-FI",
            //   clase: welcomeStyle.divRowBottom,
            // },
            {
              icono: "work.svg",
              textoPrimario: "Si el paciente presenta dolor",
              textoSecundario: "avisa a la ECS",
              clase: welcomeStyle.divRow,
            },
          ]}
        />

        <div className={welcomeStyle.bottomBegin}>
          <div className={spaceStyle.spaceMin1} />
          <Button
            className={[comunStyle.buttonAchs, comunStyle.pantallaFinalBotones]}
            variant="contained"
            onClick={() => dispatch(handleSetStep(1.1))}
          >
            Firma de documentos en SAP
          </Button>
          <div className={spaceStyle.spaceMin1} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer,
  };
}
export default connect(mapStateToProps)(PantallaFinal);
