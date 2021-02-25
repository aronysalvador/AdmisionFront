import { connect } from 'react-redux'
import {getComunStyle} from '../../css/comun'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import { Alert, AlertTitle } from '@material-ui/lab'
import Button from "@material-ui/core/Button"
import {formateaRut} from "../../helpers/rut"
import Cabecera from '../../components/cabecera/index'
import {getSpaceStyle} from '../../css/spaceStyle'

const PacienteNoAfiliadoError = (props) => {
    const { dispatch, addmissionForm } = props
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    return (<div className={comunClass.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(3))} percentage={100} />
                <Alert severity='success'>
                    <AlertTitle>Resumén</AlertTitle>
                        <strong>Rut Trabajador: </strong>{formateaRut(addmissionForm.rut)}<br />
                        <strong>Afiliado : </strong>{addmissionForm.isAfiliado}<br />
                        <hr />
                        <strong>Rut Empresa: </strong>{formateaRut(addmissionForm.rutEmpresa)}<br />
                        <strong>Nombre Empresa : </strong>{addmissionForm.empresa}
                        <hr />
                </Alert>

                <div className={spaceStyle.space9} />
                <div>
                <Button className={comunClass.buttonAchs} variant='contained' type='submit'>
                    Si, es correcta
                </Button>
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