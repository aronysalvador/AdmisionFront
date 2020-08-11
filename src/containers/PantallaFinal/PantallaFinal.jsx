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
  const { dispatch, microsoftReducer } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={comunStyle.rootBegin}>
      <div className={welcomeStyle.beginContainer}>
        <div className={spaceStyle.space2}>
          <div className={welcomeStyle.avatarContainerRight}>
            <Avatar className={welcomeStyle.avatarBegin}>
              {microsoftReducer.userMsal.iniciales}
            </Avatar>
          </div>
        </div>
      </div>

      <div className={welcomeStyle.TextContainer}>
        <img
          alt="Excelente"
          src="static/icon-check.png"
          className={welcomeStyle.iconCircular}
        />
        <Typography
          variant="h1"
          component="h1"
          className={welcomeStyle.txtBegin}
        >
          Accidente ingresado
        </Typography>
      </div>

      <div className={welcomeStyle.beginContainerCard}>
        <div className={welcomeStyle.rutSiniestroContainer}>
          <CajaRutSiniestro
            textoPrincipal="1234567"
            textoSecundario="ID Siniestro"
          />
          <CajaRutSiniestro
            textoPrincipal="25.951.215-8"
            textoSecundario="Rut paciente"
          />
        </div>
      </div>

      <div className={welcomeStyle.beginContainer}>
        <Typography
          variant="h5"
          component="h5"
          className={welcomeStyle.subTitleBegin}
        >
          Pide al paciente:
        </Typography>

        <IndiciacionesPacientes
          indicaciones={[
            {
              icono: "espera.svg",
              textoPrimario: "Esperar en sala",
              textoSecundario: "al llamado del doctor",
              clase: welcomeStyle.divRowBottom,
            },
            {
              icono: "sms.svg",
              textoPrimario: "Recordarle su número SGP",
              textoSecundario: " y el modo de conectarse al WI-FI",
              clase: welcomeStyle.divRowBottom,
            },
            {
              icono: "work.svg",
              textoPrimario: "Si presenta dolor",
              textoSecundario: " avisa a los TENS",
              clase: welcomeStyle.divRow,
            },
          ]}
        />

        <div className={welcomeStyle.bottomBegin}>
          <Button
            className={[comunStyle.buttonAchs, comunStyle.pantallaFinalBotones]}
            variant="contained"
            onClick={() => dispatch(handleSetStep(2))}
          >
            Firma de documentos en SAP
          </Button>
          <div className={spaceStyle.spaceMin1}></div>

          <Button
            variant="contained"
            className={[
              comunStyle.buttonAchs2,
              comunStyle.pantallaFinalBotones,
            ]}
            size="small"
          >
            Ingresar nueva admision
          </Button>
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
