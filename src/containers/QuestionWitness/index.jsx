import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm  } from "../../redux/actions/AdmissionAction";
import QuestionTestigoResponsable from "../../components/Questions/QuestionTestigoResponsable";

const QuestionWitness = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(12.1))}
        percentage={addmissionForm.percentage}
      />
      <QuestionTestigoResponsable
        titulo={"¿Alguien fue  "}
        titulo2={"testigo"}
        titulo3={" de lo que sucedió?"}
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

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(QuestionWitness);
