import React from "react";
import { connect } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import IdentificationForm from "../../components/Identification/identificationForm";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useEffect } from "react";
import { CLEAR_STATE } from "../../redux/types/addmissionFormType";

const Identification = (props) => {
  const { dispatch, addmissionForm } = props;
  useEffect(() => {
    dispatch({ type: CLEAR_STATE });

    dispatch(handleSetStep(3));
  }, []);
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(--addmissionForm.step))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <IdentificationForm />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(Identification);
