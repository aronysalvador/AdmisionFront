import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import {getWelcomeStyle} from '../../css/welcomeStyle'
import Link from '@material-ui/core/Link'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import '../../css/catamaranFont.css'
import '../../css/sfUiDisplayCufonfonts.css'
import admisionista from './../../img/relato.svg'

const Welcome = (props) => {
    const { dispatch, addmissionForm} = props

    const welcomeStyle = getWelcomeStyle()
    const comunStyle = getComunStyle()
    const spaceStyle = getSpaceStyle()

    return (
            <div className={comunStyle.root}>
                <div className={spaceStyle.space4} />
                <div className={welcomeStyle.avatarContainer}>
                    <img alt='Ejecutivo de admisión' src={admisionista} className={welcomeStyle.avatar} />
                </div>
                <div className={spaceStyle.space4} />
                <div className={welcomeStyle.bienvenidoContainer}>
                    <Typography variant='inherit' component='p' className={[ comunStyle.textAchsContent, welcomeStyle.bienvenido ]}>
                        Bienvenido/a
                    </Typography>
                </div>
                <div>
                    <Typography variant='inherit' component='p' className={[ comunStyle.textAchsContent, welcomeStyle.admisionText ].join(' ')}>
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
                            variant='contained'
                            onClick={() => dispatch(handleSetStep(++addmissionForm.step))}
                        >
                            Empecemos
                        </Button>
                </div>
                <div className={spaceStyle.spaceMin1} />
                <div>
                    <Typography variant='inherit' component='p' display='block'
className={[ comunStyle.textAchsContent, welcomeStyle.terminos ]}
                    >
                        Al hacer click en Empecemos,
                    </Typography>
                    <Typography variant='inherit' component='p' display='block'
className={[ comunStyle.textAchsContent, welcomeStyle.terminos ]}
                    >
                        aceptas nuestros
                        <Link className={[ comunStyle.textAchsContent, welcomeStyle.terminos, welcomeStyle.terminos ]} component='button' variant='body2'
onClick={() => dispatch(handleSetStep(4))}
                        >
                        Términos y condiciones
                        </Link>
                    </Typography>
                </div>
            </div>
    );
}

function mapStateToProps({ addmissionForm}) {
    return {
        addmissionForm
    }
}
export default connect(mapStateToProps)(Welcome)
