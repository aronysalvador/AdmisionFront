import React from 'react'
import { connect } from 'react-redux'
import {getComunStyle} from '../../css/comun'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import Cabecera from '../../components/cabecera/index'
import Typography from '@material-ui/core/Typography'
import {getSpaceStyle} from '../../css/spaceStyle'
import BoxACHS from '../../components/share/BoxACHS/index'

const PersonalData = (props) => {
    const { dispatch, addmissionForm } = props
    const comunClass = getComunStyle()
    const spaceStyle = getSpaceStyle()

    const tituloEmpresa = "Empresa"
    const contenidoEmpresa = [addmissionForm.empresa,<br />,<br />,addmissionForm.rutEmpresa]

    const tituloDireccion = "Dirección particular"
    const contenidoDireccion = [<br />,<br />]

    const tituloTelefono = "Teléfono personal"
    const contenidoTelefono = [<br />]

    return (<div className={comunClass.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(3))} percentage={addmissionForm.percentage} />
                <div>
                    <Typography variant="p" component="p" className={comunClass.pregunta}>
                        Por favor, verifica la información
                    </Typography>
                </div>
                <div className={spaceStyle.space1} />
                <BoxACHS titulo={tituloEmpresa}  contenido={contenidoEmpresa}/> 
                <div className={spaceStyle.spaceMin1} />
                <BoxACHS titulo={tituloDireccion}  contenido={contenidoDireccion}/> 
                <div className={spaceStyle.spaceMin1} />
                <BoxACHS titulo={tituloTelefono}  contenido={contenidoTelefono}/> 
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(PersonalData);