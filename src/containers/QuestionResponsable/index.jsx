import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import QuestionTestigoResponsable from "../../components/Questions/QuestionTestigoResponsable";
import Header from "../../components/header/index";

const QuestionResponsable = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const comunClass = getComunStyle();

  let back = addmissionForm?.testigos?.nombre.length > 0 ?  14.1 : 13

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
          dispatch={() => dispatch(handleSetStep(back))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <QuestionTestigoResponsable
        titulo={"¿Se le"}
        titulo2={"reportó el accidente a un responsable "}
        titulo3={"en la empresa?"}
        accionButoonA={() => dispatch(handleSetStep(16))}
        accionButoonB={() => {
          dispatch(updateForm("responsable",  { nombre: "", cargo: "" }));
          dispatch(updateForm("fechaHoraResponsable",  {}));
          dispatch(handleSetStep(18.1))     
        }}
        tituloA={"Agregar responsable"}
        tituloB={"No avisé a nadie"}
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
export default connect(mapStateToProps)(QuestionResponsable);
