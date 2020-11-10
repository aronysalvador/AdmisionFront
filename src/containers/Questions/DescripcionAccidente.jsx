import React from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import QuestionForm from "../../components/Questions/questionForm";
import Header from "../../components/header/index";

const AccidentDescriptionForm = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const { descripcionAccidente } = addmissionForm;
  const respuestaOriginal = descripcionAccidente;

  const comunClass = getComunStyle();

  const saveAnswer = (value) => {
    dispatch(updateForm("descripcionAccidente", value));
    dispatch(handleSetStep(++addmissionForm.step));
    if(respuestaOriginal !== value) {
      dispatch(updateForm("volverAConcatenar", true));
    }

  };

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
          dispatch={() => dispatch(handleSetStep(--addmissionForm.step))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div>
        <QuestionForm
          titulo={' "Lo que ocurrió'}
          titulo2={'fue que... y'}
          pregunta={'la lesión '}
          pregunta2={'que presenta es..." '}
          placeholder={
            "Sufre caída y la consecuencia fue una contusión - metió la mano en caldera y sufre quemadura - frena bruscamente para evitar chocar y la consecuencia fue una contusión"
          }
          accion={saveAnswer}
          valueFromState={descripcionAccidente}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(AccidentDescriptionForm);
