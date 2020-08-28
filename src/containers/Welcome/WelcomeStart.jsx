import React from 'react';
import { connect, shallowEqual, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Link from '@material-ui/core/Link'
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { handleLog } from "../../redux/actions/Log";
import Cabecera from "../../components/cabecera/index";
import Indiciaciones from "../../components/Indicaciones";

import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

import { FechaHora } from './../../helpers/utils'

const Start = (props) =>{
    const { dispatch, microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const { microsoftReducer: { userMsal } } = useSelector((state) => state, shallowEqual);
    const { email } = userMsal;

    const { LogForm: {ID, loading, error} } = useSelector((state) => state, shallowEqual);
    const { addmissionForm: {centrosForm} } = useSelector((state) => state, shallowEqual);
   
    const handleBegin = () => {

        if(ID>0){
            console.log("log creado")
            dispatch(handleSetStep(2))
        }else{
            console.log("log NO creado")
            //crea log
            dispatch(handleLog(email, FechaHora(), centrosForm)) 
            if(!loading){
                if(!error){
                    dispatch(handleSetStep(2)) 
                }else{
                    console.log(error)
                    setTimeout(() => {
                        dispatch(handleSetStep(2))
                    }, 1000);
                }
            }
        }
      
    }

    return(
        <div className={comunStyle.rootBegin}>

            <div className={welcomeStyle.beginContainer}>
            <Cabecera dispatch={() => dispatch(handleSetStep(1))} percentage={-1} noSpace={true} />
                <div className={spaceStyle.space2} >
                    <div className={welcomeStyle.avatarContainerRight}>
                        <Avatar className={welcomeStyle.avatarBegin}>{microsoftReducer.userMsal.iniciales}</Avatar>
                    </div>
                </div>
            </div>            

            <div className={welcomeStyle.TextContainer1}>
                <Typography
                variant="h1"
                component="h1"
                className={welcomeStyle.txtBegin}
                >
                    ¡Empecemos!
                </Typography>
            </div>

            <div className={welcomeStyle.beginContainerCard}>
                <div className={welcomeStyle.titleContainer}>
                    <div className={welcomeStyle.divRow}>
                        <ThumbUpIcon />   
                        <Typography
                        variant="p"
                        component="p"
                        className={welcomeStyle.titleBegin}
                        >
                            Mantén una actitud positiva
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={spaceStyle.space2} />

            <div className={welcomeStyle.beginContainer}>
                <Typography
                    variant="h5"
                    component="h5"
                    className={welcomeStyle.subTitleBegin}
                    >
                   Por ahora ten en cuenta:
                </Typography>
        
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

                <div className={welcomeStyle.bottomBegin}>
                    <Button
                        className={comunStyle.buttonAchs}
                        variant="contained"
                        onClick={() => handleBegin()}
                    >
                    Entendido
                    </Button>
                </div>

                <div className={welcomeStyle.beginContainer}>
                    <Typography variant="p" component="p" display="block" className={[comunStyle.textAchsContent,welcomeStyle.terminos]} >
                        Al hacer click en empezar,  
                        <Link className={[comunStyle.textAchsContent,welcomeStyle.terminos,welcomeStyle.terminos]} component="button" variant="body2" onClick={()=> dispatch(handleSetStep(4))}>
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