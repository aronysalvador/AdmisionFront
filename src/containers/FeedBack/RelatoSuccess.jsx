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

const RelatoSuccess = (props) =>{
    const { dispatch,microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();
    return(
        <div className={comunStyle.rootBegin}>

            <div className={welcomeStyle.beginContainer}>
               <Cabecera dispatch={() => dispatch(handleSetStep(19))} percentage={-1} noSpace={true} />
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
                    Relato capturado
                </Typography>
            </div>


            <div className={welcomeStyle.beginContainer}>
                <Typography
                    variant="h5"
                    component="h5"
                    className={welcomeStyle.subTitleBegin}
                    >
                    Ahora revisarás su información laboral:
                </Typography>
        
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
                            textoSecundario: "y sonrie con amabilidad",
                            clase: welcomeStyle.divRow,
                        },
                    ]}
                />

                <div className={welcomeStyle.bottomBegin}>
                    <Button
                        className={comunStyle.buttonAchs}
                        variant="contained"
                        onClick={() => dispatch(handleSetStep(20))}
                    >
                      Revisar información laboral
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
export default connect(mapStateToProps)(RelatoSuccess)