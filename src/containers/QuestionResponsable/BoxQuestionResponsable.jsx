import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BoxTestigosResponsable from "../../components/Questions/BoxTestigosResponsable";
import { cardSiniestroStyles } from "../../css/cardSiniestroStyle";
import Header from "../../components/header/index";

const BoxQuestionResponsable = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const comunClass = getComunStyle();
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
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep("x",17.1))}
          percentage={addmissionForm.percentage}
        />
      </div>
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

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
}

export default connect(mapStateToProps)(BoxQuestionResponsable);
