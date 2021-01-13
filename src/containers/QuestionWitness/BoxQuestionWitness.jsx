import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BoxTestigosResponsable from "../../components/Questions/BoxTestigosResponsable";
import { cardSiniestroStyles } from "../../css/cardSiniestroStyle";
import Header from "../../components/header/index";

const QuestionWitness = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const comunClass = getComunStyle();
  const classes = cardSiniestroStyles();

  const tituloTestigo = "Testigo";
  const contenidoTestigo = [
    <div className={classes.itemFecha} >{addmissionForm.testigos.nombre} </div>,
    <br />,
    addmissionForm.testigos.cargo,
  ];

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(14))}
          percentage={addmissionForm.percentage}
        />
      </div>
        <BoxTestigosResponsable
          titulo={"¿Alguien fue  "}
          titulo2={"testigo"} 
          titulo3={" de lo que sucedió?"}
          tituloTestigo={tituloTestigo}
          contenidoTestigo={contenidoTestigo}
          irA={() => dispatch(handleSetStep(15))}
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

export default connect(mapStateToProps)(QuestionWitness);
