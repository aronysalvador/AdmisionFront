import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Indiciaciones from "../../components/Indicaciones";
import Cabecera from "../../components/cabecera/cabeceraSinBarra";
import Header from "../../components/header/index";
import { Grid } from '@material-ui/core';
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import check from './../../img/icon-check.png'
import excelent from './../../img/excelent.svg'

const RelatoSuccess = (props) => {
  const { dispatch, microsoftReducer } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  
  return (
    <div className={comunStyle.rootBegin}>
      <div className={comunStyle.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={welcomeStyle.backgroundBoxAchsDesk}>
        <div className={welcomeStyle.beginContainer}>
          <div className={comunStyle.displayMobile}>
            <Cabecera 
              dispatch={() => dispatch(handleSetStep(19))} 
              color={"#373737" }  
              percentage={-1} 
              noSpace={true} />
          </div>
          <div className={comunStyle.displayDesk}>
            <Cabecera 
              dispatch={() => dispatch(handleSetStep(19))} 
              color={"#fff" } 
              percentage={-1} 
              noSpace={true} />
          </div>
          <div className={comunStyle.displayMobile}>
            <div className={welcomeStyle.avatarContainerRight}>
              <Avatar className={welcomeStyle.avatar}>
                {microsoftReducer.userMsal.iniciales}
              </Avatar>
            </div>
            <div className={spaceStyle.space6} />
          </div>
          <div className={comunStyle.titleDesk}>
            <div className={welcomeStyle.TextContainer}>
              <div className={comunStyle.displayMobile}>
                <img
                  alt="Excelente"
                  src={check}
                  className={welcomeStyle.iconCircular}
                />
              </div> 
              <Typography className={welcomeStyle.titleBegin}>
                ¡Excelente!
              </Typography>
              <div style={{display: 'flex'}}>
                <Typography className={welcomeStyle.titleBegin}>
                  Relato capturado&nbsp;
                </Typography>
                <div className={comunStyle.displayDeskInline}>
                  <img alt="Excelente" src={check} className={welcomeStyle.iconCircular} />
                </div>
              </div>
            </div>
            <div className={comunStyle.displayDeskInline}>
              <Grid component="span" className={comunStyle.imgPrimaryDesk}>
                <img alt="excelente" src={excelent} />
              </Grid>
            </div>
          </div>
        </div>
      </div>  
      <div className={welcomeStyle.beginContainer}>
        <div className={comunStyle.displayDesk}> 
          <div className={spaceStyle.space1} />   
        </div>
        <div className={comunStyle.textCenterDesk}>
          <Typography className={welcomeStyle.subTitleBegin}>
            Ahora revisarás su información laboral:
          </Typography>
          <div className={comunStyle.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <div className={comunStyle.boxDesk}>
            <Indiciaciones
              indicaciones={[
                {
                  icono: "espera.svg",
                  textoPrimario: "Sin entrar en detalles",
                  textoSecundario: "no te demores en estas preguntas",
                  clase: welcomeStyle.divRowBottom,
                },
                {
                  icono: "sms.svg",
                  textoPrimario: "Revisa su lenguaje no verbal",
                  textoSecundario: "y evalúa la coherencia con su relato",
                  clase: welcomeStyle.divRowBottom,
                },
                {
                  icono: "work.svg",
                  textoPrimario: "Mantén una actitud positiva",
                  textoSecundario: "y sonríe con amabilidad",
                  clase: welcomeStyle.divRow,
                },
              ]}
            />
            <div className={welcomeStyle.bottomBegin}>
              <Button
                className={comunStyle.buttonAchs}
                variant="contained"
                onClick={() => dispatch(handleSetStep(19.3))}
              >
                Revisar información laboral
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={comunStyle.displayDesk}>
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
export default connect(mapStateToProps)(RelatoSuccess);
