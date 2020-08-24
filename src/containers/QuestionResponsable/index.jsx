import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import QuestionTestigoResponsable from "../../components/Questions/QuestionTestigoResponsable";

const QuestionResponsable = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();

  let back = addmissionForm?.testigos?.nombre.length > 0 ?  14.1 : 13

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(back))}
        percentage={addmissionForm.percentage}
      />
      <QuestionTestigoResponsable
        titulo={"Ya ¿Le contaste lo sucedido al responsable en tu empresa?"}
        accionButoonA={() => dispatch(handleSetStep(16))}
        accionButoonB={() => {
          dispatch(updateForm("responsable",  { nombre: "", cargo: "" }));
          dispatch(updateForm("fechaHoraResponsable",  {}));
          dispatch(handleSetStep(18))     
        }}
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
