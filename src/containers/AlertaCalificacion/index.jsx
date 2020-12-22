import React from "react";
import Cabecera from "../../components/cabecera/cabeceraSinBarra";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getBlackTheme } from "../../css/blackTheme";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import Avatar from "@material-ui/core/Avatar";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ErrorOutline } from "@material-ui/icons";
import Header from "../../components/header/index";
import { Grid } from '@material-ui/core';
import check from './../../img/icon-check.png'
import excelent from './../../img/excelent.svg'

const AlertaCalificacion = () => {
  const { microsoftReducer,addmissionForm: { categoriaOcupacionalForm } } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const welcomeStyle = getWelcomeStyle();
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const blackStyle = getBlackTheme();

  return (
    <div className={comunClass.rootBegin}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={welcomeStyle.backgroundBoxAchsDesk}>
        <div className={welcomeStyle.beginContainer}>
          <div className={comunClass.displayMobile}>
            <Cabecera
              dispatch={() => dispatch(handleSetStep((categoriaOcupacionalForm.nombre==="Empleadores" || categoriaOcupacionalForm.nombre==="Cuenta Propia") ? 25.1 : 19.4)) }
              color="#373737"
              percentage={-1}
              noSpace={true}
            />
          </div>
          <div className={comunClass.displayDesk}>
            <Cabecera 
              dispatch={() => dispatch(handleSetStep((categoriaOcupacionalForm.nombre==="Empleadores" || categoriaOcupacionalForm.nombre==="Cuenta Propia") ? 25.1 : 19.4)) } 
              color={"#fff" } 
              percentage={-1} 
              noSpace={true} />
          </div>
          <div className={comunClass.displayMobile}>
            <div className={welcomeStyle.avatarContainerRight}>
              <Avatar className={welcomeStyle.avatar}>
                {microsoftReducer.userMsal.iniciales}
              </Avatar>
            </div>
            <div className={spaceStyle.space6} />
          </div>
          <div className={comunClass.titleDesk}>
            <div className={welcomeStyle.TextContainer}>
              <div className={comunClass.displayMobile}>
                <img
                  alt="Excelente"
                  src={check}
                  className={welcomeStyle.iconCircular}
                />
              </div>
              <Typography className={welcomeStyle.titleBegin}>
                ¡WOW!
              </Typography>
              <div style={{display: 'flex'}}>
                <Typography className={welcomeStyle.titleBegin}>
                  Eso fue rápido&nbsp;
                </Typography>
                <div className={comunClass.displayDeskInline}>
                  <img alt="Excelente" src={check} className={welcomeStyle.iconCircular} />
                </div>
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
        <div className={comunClass.displayDesk}> 
          <div className={spaceStyle.space1} />   
        </div>
        <div className={comunClass.textCenterDesk}>
          <Typography className={welcomeStyle.subTitleBegin}>
            Para la creación del caso
          </Typography>
          <div className={comunClass.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <div className={comunClass.boxDesk}>
            <div className={welcomeStyle.titleContainerCards2}>
              <div  className={welcomeStyle.divRowBottom2}>
                <ErrorOutline />
                <Typography className={welcomeStyle.itemText2}>
                  Pide un e-mail al paciente
                </Typography>
              </div>
              <div  className={welcomeStyle.divRowBottom2}>
                <Typography className={welcomeStyle.pBegin}>
                  Es importante solicitar un e-mail al paciente para la entrega de sus documentos. Si el paciente no tiene e-mail puede agregar el de un familiar. 
                </Typography>
              </div>
            </div>
            <div className={welcomeStyle.bottomBegin}>
              <div className={comunClass.paddingElement}>
                <Button
                  className={[comunClass.buttonAchs, blackStyle.buttonFooterSpace]}
                  variant="contained"
                  onClick={() => dispatch(handleSetStep(27))}
                >
                  Continuar
                </Button>
                <div className={spaceStyle.space1} />
                <Button
                  className={comunClass.buttonAchs2}
                  variant="contained"
                  onClick={() => dispatch(handleSetStep(26.2))}
                >
                  Levantar alerta de calificación
                </Button>
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

export default AlertaCalificacion;
