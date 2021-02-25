import { connect } from 'react-redux'
import {getComunStyle} from '../../css/comun'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import { Alert, AlertTitle } from '@material-ui/lab'
import Cabecera from '../../components/cabecera/index'
import image from './../../img/segurito.gif'

const PacienteNoAfiliadoError = (props) => {
    const { dispatch } = props
    const comunClass = getComunStyle()

    return (<div className={comunClass.root}>
                <Cabecera id='PacienteNoAfiliadoError-BtnBack' dispatch={() => dispatch(handleSetStep(2))} percentage={-1} />
                <Alert severity='warning'>
                    <AlertTitle>En construcción</AlertTitle>
                </Alert>
                <div>
                    <img alt='segurito' src={image} style={{width: '22.5em'}} />
                </div>
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm
    }
}

export default connect(mapStateToProps)(PacienteNoAfiliadoError);
