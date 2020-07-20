import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxTestigosResponsable from '../../components/questions/BoxTestigosResponsable'

  const BoxQuestionResponsable = (props) => {
    const { dispatch,addmissionForm } = props

    const classesComun = getComunStyle()
    const spaceStyle = getSpaceStyle()

    const tituloTestigo = "Responsable"
    const tituloResponsable = "Responsable";
    const contenidoResponsable = [addmissionForm.responsable.nombre,<br />,addmissionForm.responsable.cargo, <br />,'Avisado el '+addmissionForm.fechaHoraResponsable.days +'-'+ addmissionForm.fechaHoraResponsable.month +'-'+ addmissionForm.fechaHoraResponsable.year];


    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(19))} percentage={addmissionForm.percentage} />
                <BoxTestigosResponsable titulo={'¿Le contaste lo sucedido al responsable en tu empresa?'}
                                        tituloTestigo={tituloTestigo}
                                        contenidoTestigo={contenidoResponsable}
                                        irA={() =>dispatch(handleSetStep(500))} />
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(BoxQuestionResponsable);

