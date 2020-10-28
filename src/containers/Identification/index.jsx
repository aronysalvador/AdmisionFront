import React, { useCallback } from "react";
import { connect } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import IdentificationForm from "../../components/Identification/identificationForm";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useEffect } from "react";
import { CLEAR_STATE } from "../../redux/types/addmissionFormType";
import Header from "../../components/header/index";

const Identification = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const initFn = useCallback(() => {
    dispatch({ type: CLEAR_STATE });
    dispatch(handleSetStep(3));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);
  
  const comunClass = getComunStyle();

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
        <IdentificationForm  />
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
export default connect(mapStateToProps)(Identification);
