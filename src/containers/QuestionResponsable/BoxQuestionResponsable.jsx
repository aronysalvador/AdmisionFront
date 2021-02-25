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
    <div key={addmissionForm.responsable.nombre} className={classes.itemFecha}>{addmissionForm.responsable.nombre}</div>,
    <br key={addmissionForm.responsable.nombre + '-space1'} />,
    addmissionForm?.responsable?.cargo,
    <br key={addmissionForm.responsable.nombre + '-space2'} />,
    "Avisado el " +
      addmissionForm.fechaHoraResponsable.days +
      "-" +
      addmissionForm.fechaHoraResponsable.month +
      "-" +
      addmissionForm.fechaHoraResponsable.year
  ];

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep("x", 17.1))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <BoxTestigosResponsable
        titulo={"¿Se le "}
        titulo2={"reportó el accidente a un responsable"}
        titulo3={"  en la empresa?"}
        tituloTestigo={tituloTestigo}
        contenidoTestigo={contenidoResponsable}
        irA={() => dispatch(handleSetStep(18.01))} // 18.1
      />
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm,
    microsoftReducer
  };
}

export default connect(mapStateToProps)(BoxQuestionResponsable);
