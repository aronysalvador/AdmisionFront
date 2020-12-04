import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm  } from "../../redux/actions/AdmissionAction";
import QuestionTestigoResponsable from "../../components/Questions/QuestionTestigoResponsable";
import Header from "../../components/header/index";

const QuestionWitness = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const comunClass = getComunStyle();


  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep("x",13))}
          percentage={addmissionForm.percentage}
        />
      </div>
      
        <QuestionTestigoResponsable
          titulo={"¿Alguien fue"}
          titulo2={"testigo "}
          titulo3={"de lo que sucedió?"}
          accionButoonA={() => dispatch(handleSetStep(14))}
          accionButoonB={() => {
            dispatch(updateForm("testigos",  { nombre: "", cargo: "" }));
            dispatch(handleSetStep(15))     
          }}
          tituloA={"Agregar testigo"}
          tituloB={"No hubo testigos"}
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
