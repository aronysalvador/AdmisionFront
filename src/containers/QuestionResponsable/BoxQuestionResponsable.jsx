import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BoxTestigosResponsable from "../../components/Questions/BoxTestigosResponsable";
import { cardSiniestroStyles } from "../../css/cardSiniestroStyle";

const BoxQuestionResponsable = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();
  const classes = cardSiniestroStyles();

  const tituloTestigo = "Responsable";
  const contenidoResponsable = [
    <div className={classes.itemFecha} >{addmissionForm.responsable.nombre}</div>,
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
        titulo={"¿Se le "}
        titulo2={"reportó el accidente a un responsable"}
        titulo3={"  en la empresa?"}
        tituloTestigo={tituloTestigo}
        contenidoTestigo={contenidoResponsable}
        irA={() => dispatch(handleSetStep(18.1))}
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
