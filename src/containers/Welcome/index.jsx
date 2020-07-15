import React, {useEffect} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import { login,isExistAccount,getAccount } from '../../redux/actions/microsoft.action'
import {getWelcomeStyle} from '../../css/welcomeStyle'
import Link from '@material-ui/core/Link'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import '../../css/catamaranFont.css'
import '../../css/sfUiDisplayCufonfonts.css'

const Welcome = (props) => {

    const { dispatch, addmissionForm, microsoft } = props

    console.log(addmissionForm)
    console.log("microsoft", microsoft)

    const welcomeStyle = getWelcomeStyle();  
    const comunStyle = getComunStyle();  
    const spaceStyle = getSpaceStyle();

    const usermsal = getAccount()
    const scopes = ["user.read"]

    useEffect(() => {
        /*const reqMsal = async () => {
            if (usermsal) {
              await dispatch(isExistAccount(scopes))
            }
        }
        reqMsal() */
        const obj = dispatch(getAccount())
        console.log("obj",obj)
        //dispatch(login())
      },[])
    
    return (
            <div className={comunStyle.root}>
                <div className={spaceStyle.space4} />
                <div   className={welcomeStyle.avatarContainer}>
                    <img alt="Ejecutivo de admisión" src="static/admisionista.jpg" className={welcomeStyle.avatar} />
                </div>
                <div className={spaceStyle.space4} />
                <div   className={welcomeStyle.bienvenidoContainer}>
                    <Typography variant="p" component="p" className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}>
                        Bienvenido/a
                    </Typography>
                </div>
                <div>
                    <Typography variant="p" component="p" className={[comunStyle.textAchsContent,welcomeStyle.admisionText]}>
                            Vamos a hacer una admisión:
                            <br />
                            <br />
                            - Lorem ipsum dolor sit amet 
                            <br /> 
                            - Consectetur adipiscing elit  
                            <br />
                            - Adipiscing velit et, non sed curabitur    
                    </Typography>
                </div>
                <div className={spaceStyle.space5} />
                <div>
                        <Button
                            className={comunStyle.buttonAchs}
                            variant="contained"
                            onClick={()=> dispatch(handleSetStep(++addmissionForm.step))}>
                            Empecemos
                        </Button>
                </div>
                <div className={spaceStyle.spaceMin1} />
                <div>
                    <Typography variant="p" component="p" display="block" className={[comunStyle.textAchsContent,welcomeStyle.terminos]} >
                        Al hacer click en Empecemos,
                    </Typography>
                    <Typography variant="p" component="p" display="block" className={[comunStyle.textAchsContent,welcomeStyle.terminos]} >
                        aceptas nuestros  
                        <Link className={[comunStyle.textAchsContent,welcomeStyle.terminos,welcomeStyle.terminos]} component="button" variant="body2" onClick={()=> dispatch(handleSetStep(4))}>
                        Términos y condiciones
                        </Link>
                    </Typography>
                </div>
            </div>   
    );
}

function mapStateToProps({ addmissionForm, microsoft }) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Welcome);