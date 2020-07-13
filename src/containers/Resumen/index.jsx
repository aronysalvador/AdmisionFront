import React from 'react'
import { connect } from 'react-redux'
import {getComunStyle} from '../../css/comun'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import { Alert, AlertTitle } from '@material-ui/lab'
import {formateaRut} from "../../helpers/rut"
import Cabecera from '../../components/cabecera/index'

const PacienteNoAfiliadoError = (props) => {
    const { dispatch,addmissionForm } = props
    const comunClass = getComunStyle()

    return (<div className={comunClass.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(3))} percentage={100} />
                <Alert severity="success">
                    <AlertTitle>Resumén</AlertTitle>
                        <strong>Rut Trabajador: </strong>{formateaRut(addmissionForm.rut)}<br />
                        <strong>Afiliado : </strong>{addmissionForm.isAfiliado}<br />
                        <hr />
                        <strong>Rut Empresa: </strong>{formateaRut(addmissionForm.rutEmpresa)}<br />
                        <strong>Nombre Empresa : </strong>{addmissionForm.empresa}
                        <hr />
                </Alert>                    
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(PacienteNoAfiliadoError);