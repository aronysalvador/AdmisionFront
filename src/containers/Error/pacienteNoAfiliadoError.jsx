import React from 'react'
import { connect } from 'react-redux'
import {getComunStyle} from '../../css/comun'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import { Alert,AlertTitle } from '@material-ui/lab'
import Cabecera from '../../components/cabecera/index'


const PacienteNoAfiliadoError = (props) => {
    const { dispatch } = props
    const comunClass = getComunStyle()

    return (<div className={comunClass.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(2))} percentage={-1} />
                <Alert severity="warning">
                    <AlertTitle>En construcción</AlertTitle>
                </Alert>
                <div>
                    <img alt="segurito" src="./static/segurito.gif" style={{width:'22.5em'}} />
                </div>
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(PacienteNoAfiliadoError);
