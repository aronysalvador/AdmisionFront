import React from 'react';
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Link from '@material-ui/core/Link'
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import Indiciaciones from "../../components/Indicaciones";
import Header from "../../components/header/index";
import { logout } from "../../redux/actions/microsoft.action";

import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";


const Start = (props) =>{
    const { dispatch, microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();


    return(
        <div className={[comunStyle.rootBegin]}>
            <div className={comunStyle.header}> 
                <Header
                    dispatch={() => dispatch(logout())}
                    userMsal={ microsoftReducer.userMsal }
                    // step={1}
                />
            </div>
            <div className={ welcomeStyle.backgroundBoxAchsDesk }>
                <div className={welcomeStyle.beginContainer}>
                    <Cabecera dispatch={() => dispatch(handleSetStep(1))} color="#373737" percentage={-1} noSpace={true} />
                    <div className={[comunStyle.displayMobile]}>
                        <div className={[welcomeStyle.avatarContainerRight]}>
                            <Avatar className={welcomeStyle.avatar}>{microsoftReducer.userMsal.iniciales}</Avatar>
                        </div>
                        <div className={spaceStyle.space3} />
                    </div>
                    <div className={comunStyle.textCenterDesk}>
                        <div className={welcomeStyle.textContainer}>
                            <Typography
                            variant="h1"
                            component="h1"
                            className={welcomeStyle.titleBegin}
                            >
                                ¡Empecemos una nueva admisión!
                            </Typography>
                        </div>
                        <div className={welcomeStyle.titleContainer}>
                            <div className={welcomeStyle.divRow}>
                                <ThumbUpIcon />   
                                <Typography
                                variant="p"
                                component="p"
                                className={welcomeStyle.txtBegin}
                                style={{display:"inline-flex"}}
                                >
                                    Mantén una actitud positiva
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={welcomeStyle.beginContainer}>
                <div className={spaceStyle.space2} />
                <div className={comunStyle.textCenterDesk}>
                    <Typography
                        variant="h5"
                        component="h5"
                        className={welcomeStyle.subTitleBegin}
                        >
                        Por ahora ten en cuenta:
                    </Typography>
                    <div className={comunStyle.boxDesk}>
                        <Indiciaciones
                            indicaciones={[
                                {
                                    icono: "espera.svg",
                                    textoPrimario: "Identifica al paciente",
                                    textoSecundario: "",
                                    clase: welcomeStyle.divRowBottom,
                                },
                                {
                                    icono: "sms.svg",
                                    textoPrimario: "Toma el relato",
                                    textoSecundario: "",
                                    clase: welcomeStyle.divRowBottom,
                                },
                                {
                                    icono: "work.svg",
                                    textoPrimario: "Solicita los datos",
                                    textoSecundario: "",
                                    clase: welcomeStyle.divRow,
                                },
                            ]}
                        />
                        <div className={comunStyle.displayMobile}>
                            <div className={spaceStyle.space2} />
                        </div>
                        <div style={{marginTop: "3px"}}>
                            <Button
                                className={comunStyle.buttonAchs}
                                variant="contained"
                                onClick={() => dispatch(handleSetStep(2)) }
                            >
                                Entendido
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{padding: "10px 16px 0 16px"}} className={comunStyle.displayMobile}>
                    <Typography variant="p" component="p" display="block" className={[comunStyle.textAchsContent, welcomeStyle.terminos]} >
                        Al hacer click en empezar,  
                        <Link className={[comunStyle.textAchsContent, welcomeStyle.terminos]} component="button" variant="body2" onClick={()=> dispatch(handleSetStep(4))}>
                            aceptas nuestros  <span style={{textDecoration: 'underline'}}>Términos y condiciones</span>
                        </Link>
                    </Typography>
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
export default connect(mapStateToProps)(Start)