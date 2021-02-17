import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun"
import { getSpaceStyle } from "../../css/spaceStyle";
import CajaRutSiniestro from "./CajaRutSiniestro";
import Header from "../../components/header/index";
import { Grid } from '@material-ui/core';
import check from './../../img/icon-check.png'
import excelent from './../../img/excelent.svg'
import { initSessionDate } from "./../../redux/actions/Log";

const CasoCreadoErrorStatus = (props) => {
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
                  textoSecundario="Rut Paciente"
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

          <div className={comunClass.boxDesk4}>
            
            <Grid className={comunClass.titleH1}>
                ¡Alerta status!
            </Grid>
            
            <div className={spaceStyle.space1} />
            
            <Grid className={comunClass.titleH3}>
                Paciente se encuentra en recepción ambulatoria
            </Grid>
            
            <div className={spaceStyle.space1} />

            <Grid className={comunClass.subTitleH4}>
                Cambia el status a atención ambulatoria usando  SAP
            </Grid>

            <div className={spaceStyle.space2} />

            <div className={welcomeStyle.bottomBegin}>
              <div className={comunClass.displayMobile}>
                <div className={spaceStyle.spaceMin1} />
              </div>
              <Button
                id="CasoCreadoErrorDoc-Btn1"
                className={[comunClass.buttonAchs, comunClass.pantallaFinalBotones]}
                variant="contained"
                onClick={() =>{dispatch(initSessionDate("")); dispatch(handleSetStep(1))}} // 1.1 Empecemos eliminada
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
export default connect(mapStateToProps)(CasoCreadoErrorStatus);
