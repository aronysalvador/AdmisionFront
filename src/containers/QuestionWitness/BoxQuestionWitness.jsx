import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxTestigosResponsable from '../../components/questions/BoxTestigosResponsable'

  const QuestionWitness = (props) => {
    const { dispatch,addmissionForm } = props

    const classesComun = getComunStyle()
    const spaceStyle = getSpaceStyle()

    const tituloTestigo = "Testigo"
    const contenidoTestigo = [addmissionForm.testigos.nombre,<br />,addmissionForm.testigos.cargo]


    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(15))} percentage={addmissionForm.percentage} />
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

