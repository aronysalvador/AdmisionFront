import React from "react";
import TabCompany from "../../components/EditCompany/TabCompany";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const EditCompany = () => {
  const spaceStyle = getSpaceStyle();

  const { percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const { buttonAchs, root, pregunta, bottomElement } = getComunStyle();
  const dispatch = useDispatch();


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Ingresa la Razón Social o RUT de la empresa en donde trabajas
      </Typography>
      <div className={spaceStyle.space2} />

      <TabCompany />

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(handleSetStep(5.5));
            //dispatch(updateForm("rutEmpresa",rutEmpresaForm))
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default EditCompany;
