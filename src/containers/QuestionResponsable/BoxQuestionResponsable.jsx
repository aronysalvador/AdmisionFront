import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BoxTestigosResponsable from "../../components/Questions/BoxTestigosResponsable";

const BoxQuestionResponsable = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();

  const tituloTestigo = "Responsable";
  const contenidoResponsable = [
    addmissionForm.responsable.nombre,
    <br />,
    addmissionForm?.responsable?.cargo,
    <br />,
    "Avisado el " +
      addmissionForm.fechaHoraResponsable.days +
      "-" +
      addmissionForm.fechaHoraResponsable.month +
      "-" +
      addmissionForm.fechaHoraResponsable.year,
  ];

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(17))}
        percentage={addmissionForm.percentage}
      />
      <BoxTestigosResponsable
        titulo={"¿Se le reportó el accidente a un responsable en la empresa?"}
        tituloTestigo={tituloTestigo}
        contenidoTestigo={contenidoResponsable}
        irA={() => dispatch(handleSetStep(18))}
      />
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(BoxQuestionResponsable);
