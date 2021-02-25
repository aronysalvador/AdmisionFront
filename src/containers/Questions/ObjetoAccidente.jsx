import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import QuestionForm from "../../components/Questions/questionForm";
import Header from "../../components/header/index";

const AccidentObjectForm = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const { objetoAccidente } = addmissionForm;

  const comunClass = getComunStyle();

  const respuestaOriginal = objetoAccidente;
  const saveAnswer = (value) => {
    dispatch(updateForm("objetoAccidente", value));
    dispatch(handleSetStep(8.1));
    if (respuestaOriginal !== value)
      dispatch(updateForm("volverAConcatenar", true));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header
          userMsal={ microsoftReducer.userMsal }
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
          titulo2={ ' "El accidente' }
          pregunta={ 'ocurrió con..." ' }
          placeholder={
            "Ejemplo: Con la escalera - con el suelo - al caer tineta en el pie"
          }
          accion={saveAnswer}
          valueFromState={objetoAccidente}
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
export default connect(mapStateToProps)(AccidentObjectForm);
