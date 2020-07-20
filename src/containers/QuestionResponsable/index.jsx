import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxACHSEditDelete from '../../components/share/BoxACHSEditDelete/index';
import QuestionTestigoResponsable from '../../components/questions/QuestionTestigoResponsable'

//Action de Redux
import {sendIsapres} from '../../redux/actions/AdmissionAction'
import {searchIsapres} from '../../redux/actions/PrevisionAction'

  const QuestionResponsable = (props) => {
    const { dispatch,addmissionForm } = props

    //State
    

    const dispatch1 = useDispatch();
    const getResponsable = useSelector(state => state.addmissionForm.responsable);
    

    useEffect( () => {
       

    }, []);

    const classesComun = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const tituloResponsable = "Responsable";
    const contenidoResponsable = [addmissionForm.responsable.nombre,<br />,addmissionForm.responsable.cargo, <br />,'Avisado el '+addmissionForm.fechaHoraResponsable.days +'-'+ addmissionForm.fechaHoraResponsable.month +'-'+ addmissionForm.fechaHoraResponsable.year];

    return (
        <div className={classesComun.root}>
        <Cabecera dispatch={() => dispatch(handleSetStep(15))} percentage={addmissionForm.percentage} />
        <QuestionTestigoResponsable titulo={'Ya ¿Le contaste lo sucedido al responsable en tu empresa?'}
                                     accionButoonA={() => dispatch(handleSetStep(18))}
                                     accionButoonB={() => dispatch(handleSetStep(500))}
                                     tituloA={'Agregar responsable'}
                                     tituloB={'No avise a nadie'} />
    </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(QuestionResponsable);

