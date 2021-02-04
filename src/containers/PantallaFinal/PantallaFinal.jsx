import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun"
import { getSpaceStyle } from "../../css/spaceStyle";
import IndiciacionesPacientes from "../../components/Indicaciones";
import CajaRutSiniestro from "./CajaRutSiniestro";
import Header from "../../components/header/index";
import { Grid } from '@material-ui/core';

import check from './../../img/icon-check.png'
import excelent from './../../img/excelent.svg'
import espera from './../../img/espera.svg'
import work from './../../img/work.svg'

const PantallaFinal = (props) => {
  const { dispatch, microsoftReducer, addmissionForm } = props;
  const { siniestroID, rut } = addmissionForm;
  const welcomeStyle = getWelcomeStyle();
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={comunClass.rootBegin}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={welcomeStyle.backgroundBoxAchsDesk}>
        <div className={welcomeStyle.beginContainer}>
          <div className={comunClass.displayMobile}>
            <div className={welcomeStyle.avatarContainerRight}>
              <Avatar className={welcomeStyle.avatar}>
                {microsoftReducer.userMsal.iniciales}
              </Avatar>
            </div>
            <div className={spaceStyle.space6} />
          </div>
          <div className={comunClass.titleDeskFinal}>
            <div style={{display: 'block'}}>
              <div className={welcomeStyle.TextContainer}>
                <div className={comunClass.displayMobile}>
                  <img
                    alt="Excelente"
                    src={check}
                    className={welcomeStyle.iconCircular}
                  />
                </div>
                <div className={spaceStyle.spaceMin1} />
                <div style={{display: 'inline-flex'}}>
                  <Typography className={welcomeStyle.titleBegin}>
                    Accidente ingresado&nbsp;
                  </Typography>
                </div>
                <div className={comunClass.displayDeskInline} style={{verticalAlign: 'bottom'}}>
                  <img alt="Excelente" src={check} className={welcomeStyle.iconCircular} />
                </div>
              </div>
              <div className={spaceStyle.space1} />  
              <div className={comunClass.displayMobile}>
                <div className={spaceStyle.space1} />
              </div>          
              <div className={welcomeStyle.rutSiniestroContainer}>
                <CajaRutSiniestro
                  textoPrincipal={siniestroID}
                  textoSecundario="ID Siniestro"
                />
                <CajaRutSiniestro
                  textoPrincipal={rut}
                  textoSecundario="Doc. Identidad"
                />
              </div>
            </div>
            <div className={comunClass.displayDeskInline}>
              <Grid component="span" className={comunClass.imgPrimaryDesk}>
                <img alt="excelente" src={excelent} />
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className={welcomeStyle.beginContainer}>
        
        <div className={comunClass.textCenterDesk}>
          <div className={comunClass.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <Typography className={welcomeStyle.subTitleBegin}>
            Luego de la firma pide al paciente:
          </Typography>
          <div className={comunClass.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <div className={comunClass.boxDesk}>
            <IndiciacionesPacientes
              indicaciones={[
                {
                  icono: espera,
                  textoPrimario: "Esperar en sala",
                  textoSecundario: "al llamado del doctor",
                  clase: welcomeStyle.divRowPantallaFinal,
                },
                // {
                //   icono: "sms.svg",
                //   textoPrimario: "Recordarle su número SGP",
                //   textoSecundario: " y el modo de conectarse al WI-FI",
                //   clase: welcomeStyle.divRowBottom,
                // },
                {
                  icono: work,
                  textoPrimario: "Si el paciente presenta dolor",
                  textoSecundario: "avisa a la ECS",
                  clase: welcomeStyle.divRowPantallaFinal,
                },
              ]}
            />
            <div className={welcomeStyle.bottomBegin}>
              <div className={comunClass.displayMobile}>
                <div className={spaceStyle.spaceMin1} />
              </div>
              <Button
                id="PantallaFinal-Btn1"
                className={[comunClass.buttonAchs, comunClass.pantallaFinalBotones]}
                variant="contained"
                onClick={() => dispatch(handleSetStep(1))} // 1.1 Empecemos eliminada
              >
                Firma de documentos en SAP
              </Button>
              <div className={comunClass.displayMobile}>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
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
