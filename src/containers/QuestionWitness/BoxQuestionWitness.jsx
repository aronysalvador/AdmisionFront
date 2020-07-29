import React from 'react';
import { connect } from 'react-redux';
import {getComunStyle} from '../../css/comun';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxTestigosResponsable from '../../components/Questions/BoxTestigosResponsable'

  const QuestionWitness = (props) => {
    const { dispatch,addmissionForm } = props
    const classesComun = getComunStyle()
   
    const tituloTestigo = "Testigo"
    const contenidoTestigo = [addmissionForm.testigos.nombre,<br />, addmissionForm.testigos.cargo.cargo]
            
    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(16))} percentage={addmissionForm.percentage} />
                <BoxTestigosResponsable titulo={'Entendido ¿Alguien fue testigo de lo que sucedió?'}
                                        tituloTestigo={tituloTestigo}
                                        contenidoTestigo={contenidoTestigo}
                                        irA={() =>dispatch(handleSetStep(17))} />
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(QuestionWitness);

