import React from 'react';
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Indiciaciones from "../../components/Indicaciones";
import Cabecera from "../../components/cabecera/index";

import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const PersonalSuccess = (props) =>{
    const { dispatch,microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();
    return(
        <div className={comunStyle.rootBegin}>

            <div className={welcomeStyle.beginContainer}>
              <Cabecera dispatch={() => dispatch(handleSetStep(5.1))} percentage={-1} noSpace={true} />
               <div className={spaceStyle.space2} >
                    <div className={welcomeStyle.avatarContainerRight}>
                        <Avatar className={welcomeStyle.avatarBegin}>{microsoftReducer.userMsal.iniciales}</Avatar>
                    </div>
                </div>
            </div>            

            <div className={welcomeStyle.TextContainer}>
                <img alt="Excelente" src="static/icon-check.png" className={welcomeStyle.iconCircular} />
                <Typography
                variant="h1"
                component="h1"
                className={welcomeStyle.txtBegin}
                >
                    ¡Excelente!
                </Typography>
                <Typography
                variant="h1"
                component="h1"
                className={welcomeStyle.txtBegin}
                >
                    Usuario Identificado
                </Typography>
            </div>


            <div className={welcomeStyle.beginContainer}>
                <Typography
                    variant="h5"
                    component="h5"
                    className={welcomeStyle.subTitleBegin}
                    >
                 Ahora capturarás el relato:
                </Typography>
        
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
                            clase: welcomeStyle.divRow,
                        },
                    ]}
                />

                <div className={welcomeStyle.bottomBegin}>
                    <Button
                        className={comunStyle.buttonAchs}
                        variant="contained"
                        onClick={() => dispatch(handleSetStep(6))}
                    >
                    Capturar el relato
                    </Button>
                </div>


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