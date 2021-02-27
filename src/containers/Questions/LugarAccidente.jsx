import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import QuestionForm from "../../components/Questions/questionForm";
import Header from "../../components/header/index";

const AccidentPlaceForm = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const { lugarAccidente } = addmissionForm;
  const respuestaOriginal = lugarAccidente;

  const comunClass = getComunStyle();

  const saveAnswer = (value) => {
    dispatch(updateForm("lugarAccidente", value));
    dispatch(handleSetStep(++addmissionForm.step));
    if (respuestaOriginal !== value)
      dispatch(updateForm("volverAConcatenar", true));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep("x", 6))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div>
        <QuestionForm
          titulo={' "Al momento del accidente'}
          titulo2={'estaba..." '}
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

const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(AccidentPlaceForm);
