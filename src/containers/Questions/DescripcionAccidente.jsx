import React from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import QuestionForm from "../../components/Questions/questionForm";

const AccidentDescriptionForm = (props) => {
  const { dispatch, addmissionForm } = props;
  const { descripcionAccidente } = addmissionForm;
  const comunClass = getComunStyle();

  const respuestaOriginal = descripcionAccidente;

  const saveAnswer = (value) => {
    dispatch(updateForm("descripcionAccidente", value));
    dispatch(handleSetStep(++addmissionForm.step));
    if(respuestaOriginal !== value) {
      dispatch(updateForm("volverAConcatenar", true));
    }

  };


  //  useEffect(() => {
  //   setEditable(false);
  //   console.log("EDITABLE ES", isEdit);
  // }, []);

  return (
    <div className={comunClass.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--addmissionForm.step))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <QuestionForm
          titulo={"Lo que ocurrió fue ... y la lesión que presenta es ..."}
          pregunta={<br/>}
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

const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(AccidentDescriptionForm);
