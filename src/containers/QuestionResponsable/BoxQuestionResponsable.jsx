import React from 'react';
import { connect } from 'react-redux';
import {getComunStyle} from '../../css/comun';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxTestigosResponsable from '../../components/questions/BoxTestigosResponsable'

  const BoxQuestionResponsable = (props) => {
    const { dispatch,addmissionForm } = props

    const classesComun = getComunStyle()

    const tituloTestigo = "Responsable"
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

