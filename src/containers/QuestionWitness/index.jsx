import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import QuestionTestigoResponsable from '../../components/questions/QuestionTestigoResponsable'

  const QuestionWitness = (props) => {
    const { dispatch,addmissionForm } = props

    //State
    const dispatch1 = useDispatch();
    const getTestigos = useSelector(state => state.addmissionForm.testigos)

    const classesComun = getComunStyle()
    const spaceStyle = getSpaceStyle()

    const tituloTestigo = "Testigo"
    const contenidoTestigo = [addmissionForm.testigos.nombre,<br />,addmissionForm.testigos.cargo]


    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(14))} percentage={addmissionForm.percentage} />
                <QuestionTestigoResponsable titulo={'Entendido ¿Alguien fue testigo de lo que sucedió?'}
                                             accionButoonA={() => dispatch(handleSetStep(16))}
                                             accionButoonB={() => dispatch(handleSetStep(17))}
                                             tituloA={'Agregar Testigo'}
                                             tituloB={'No hubo Testigos'} />
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(QuestionWitness);

