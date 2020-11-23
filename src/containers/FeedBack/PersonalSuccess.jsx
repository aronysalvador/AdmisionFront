import React from 'react';
import { connect, useSelector, shallowEqual } from "react-redux";
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

const PersonalSuccess = (props) =>{
    const { dispatch, microsoftReducer } = props;
    const { addmissionForm: { tipoSiniestro },
    } = useSelector((state) => state, shallowEqual);
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const handleStep = () => {
      if(tipoSiniestro.Id === 2) //Accidente de Trayecto
        dispatch(handleSetStep(6.01))
      else dispatch(handleSetStep(6)) //Accidente de Trabajo
    }

    return(
      <div className={comunStyle.rootBegin}>
        <div className={comunStyle.displayDesk}> 
          <Header userMsal={ microsoftReducer.userMsal }/>
        </div>
        <div className={welcomeStyle.backgroundBoxAchsDesk}>
          <div className={welcomeStyle.beginContainer}>
            <div className={comunStyle.displayMobile}>
              <Cabecera 
                dispatch={() => dispatch(handleSetStep(5.1))} 
                color={"#373737" }  
                percentage={-1} 
                noSpace={true} />
            </div>
            <div className={comunStyle.displayDesk}>
              <Cabecera 
                dispatch={() => dispatch(handleSetStep(5.1))} 
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
                  <img alt="Excelente" src="static/icon-check.png" className={welcomeStyle.iconCircular} />
                </div>    
                <Typography className={welcomeStyle.titleBegin}>
                  ¡Excelente!
                </Typography>
                <div style={{display: 'flex'}}>
                  <Typography className={welcomeStyle.titleBegin}>
                    Usuario Identificado&nbsp;
                  </Typography>
                  <div className={comunStyle.displayDeskInline}>
                    <img alt="Excelente" src="static/icon-check.png" className={welcomeStyle.iconCircular} />
                  </div>
                </div>
              </div>
                
              <div className={comunStyle.displayDeskInline}>
                <Grid component="span" className={comunStyle.imgPrimaryDesk}>
                  <img alt="excelente" src="static/excelent.svg" />
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
              Ahora capturarás el relato:
            </Typography>
            <div className={comunStyle.displayDesk}>
              <div className={spaceStyle.space1} />
            </div>
            <div className={comunStyle.boxDesk}>
              <Indiciaciones
                indicaciones={[
                  {
                    icono: "espera.svg",
                    textoPrimario: "Completa las frases",
                    textoSecundario: "mientras escuchas con atención",
                    clase: welcomeStyle.divRowBottom,
                  },
                  {
                    icono: "sms.svg",
                    textoPrimario: "Transcribe con fidelidad",
                    textoSecundario: "usando los tiempos verbales sugeridos",
                    clase: welcomeStyle.divRowBottom,
                  },
                  {
                    icono: "work.svg",
                    textoPrimario: "Mantén la autenticidad",
                    textoSecundario: "sin alterar los sucesos",
                    clase: welcomeStyle.divRow2,
                  },
                ]}
              />
              <div className={comunStyle.displayMobile}>
                <div className={spaceStyle.space2} />
              </div>
              <div className={welcomeStyle.bottomBegin}>
                <Button
                  className={comunStyle.buttonAchs}
                  variant="contained"
                  onClick={() => handleStep()}
                >
                  Capturar el relato
                </Button>
              </div>
            </div>
          </div>
        </div> 
        <div className={comunStyle.displayDesk}>
          <div className={spaceStyle.space2} />
        </div>           
      </div>
    )
}

function mapStateToProps({ addmissionForm, microsoftReducer}) {
    return {
        addmissionForm : addmissionForm,
        microsoftReducer: microsoftReducer
    }
}
export default connect(mapStateToProps)(PersonalSuccess)