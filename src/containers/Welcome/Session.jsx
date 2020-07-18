import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import {getWelcomeStyle} from '../../css/welcomeStyle'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import '../../css/catamaranFont.css'
import '../../css/sfUiDisplayCufonfonts.css'
import { login } from '../../redux/actions/microsoft.action'

const Session = (props) => {

    const { dispatch} = props
    const welcomeStyle = getWelcomeStyle()  
    const comunStyle = getComunStyle()  
    const spaceStyle = getSpaceStyle()

    return (
            <div className={comunStyle.root}>
                <div className={spaceStyle.space12} />
                <div   className={welcomeStyle.bienvenidoContainer}>
                    <Typography variant="p" component="p" className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}>
                        Bienvenido/a
                    </Typography>
                </div>
                <div>
                    <Typography variant="p" component="p" className={[comunStyle.textAchsContent,welcomeStyle.admisionText]}>
                        Ingresa a tu cuenta para:<br /><br /> 
                        - Crear admisiones<br />
                        - Modificar tu perfil<br />  
                    </Typography>
                </div>
                <div className={spaceStyle.space9} />
                <div>
                        <Button
                            className={comunStyle.buttonAchs}
                            variant="contained"
                            onClick={()=> dispatch(login(["user.read"]))}>
                            Ingresar
                        </Button>
                </div>
            </div>   
    );
}

function mapStateToProps({ addmissionForm}) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Session)