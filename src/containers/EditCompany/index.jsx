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

  const { percentage, razonSocial, rutEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const { buttonAchs, root, bottomElement, titleBlack, titleBlue } = getComunStyle();
  const dispatch = useDispatch();


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
      Identifica la empresa en la que trabaja con su 
      <div className={titleBlue}>
        &nbsp;razón social o RUT
      </div>
      </Typography>
      <div className={spaceStyle.space2} />

      <TabCompany />

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          type="submit"
          disabled={!razonSocial || !rutEmpresa}
          onClick={() => {
            dispatch(handleSetStep(5.5));
            //dispatch(updateForm("rutEmpresa",rutEmpresaForm))
          }}
        >
          Confirmar Empresa
        </Button>
      </div>
    </div>
  );
};

export default EditCompany;
