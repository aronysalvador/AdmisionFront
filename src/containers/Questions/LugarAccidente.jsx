import React from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import QuestionForm from "../../components/Questions/questionForm";

const AccidentPlaceForm = (props) => {
  const { dispatch, addmissionForm } = props;
  const comunClass = getComunStyle();

  const { lugarAccidente } = addmissionForm;
  const respuestaOriginal = lugarAccidente;

  const saveAnswer = (value) => {
    dispatch(updateForm("lugarAccidente", value));    
    dispatch(handleSetStep(++addmissionForm.step));
    if(respuestaOriginal !== value) {
      dispatch(updateForm("volverAConcatenar", true));
    }
  };

  return (
    <div className={comunClass.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.7))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <QuestionForm
          titulo={' "Al momento del accidente estaba..." '}
          // pregunta={' estaba..." '}
          placeholder={
            "Ejemplo: Caminando por el patio del colegio, corriendo para alcanzar la micro, sentado en mi escritorio"
          }
          accion={saveAnswer}
          valueFromState={lugarAccidente}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(AccidentPlaceForm);
