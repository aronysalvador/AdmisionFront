import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import QuestionTestigoResponsable from "../../components/Questions/QuestionTestigoResponsable";

const QuestionResponsable = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(15.1))}
        percentage={addmissionForm.percentage}
      />
      <QuestionTestigoResponsable
        titulo={"Ya ¿Le contaste lo sucedido al responsable en tu empresa?"}
        accionButoonA={() => dispatch(handleSetStep(18))}
        accionButoonB={() => dispatch(handleSetStep(500))}
        tituloA={"Agregar responsable"}
        tituloB={"No avise a nadie"}
      />
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}
export default connect(mapStateToProps)(QuestionResponsable);
