import React, { useState } from "react";
import FechaSiniestro from "../../components/FechaSiniestro/FechaSiniestro";
import HoraSiniestro from "./../../components/HoraSiniestro/HoraSiniestro";
import TabCompany from "../../components/EditCompany/TabCompany";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const EditCompany = () => {
  const spaceStyle = getSpaceStyle();
  

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );


  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [horaSiniestro, setHoraSiniestro] = useState({});
  const { buttonAchs, root, pregunta, bottomElement } = getComunStyle();
  const dispatch = useDispatch();

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  function setHoraValueSiniestro(value) {
    setHoraSiniestro({ ...value });
  }

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

      <TabCompany/>

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {

            dispatch(handleSetStep(step + 1));
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default EditCompany;
