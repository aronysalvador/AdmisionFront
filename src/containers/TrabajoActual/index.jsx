import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import TrabajoActual from "../../components/TrabajoActual/TrabajoActual";

const TrabajoActualContainer = () => {
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const [ingresoTrabajoActual, setIngresoTrabajo] = useState({});
  const [meses, setMes] = useState(() => {
    return ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];    
  });
  const [anios, setAnio] = useState(() => {
    let anios = [];
    let i = 1975;
    for (i; i <= new Date().getFullYear(); i++) {
      anios.push(i);
    }
    return anios;
  });
  
  const { buttonAchs, root, pregunta, bottomElement } = getComunStyle();
  const dispatch = useDispatch();

  function setTrabajoActual(value) {
    let formattedDate = new Date(value.anio, value.mes, 1);
    setIngresoTrabajo(formattedDate);
  }
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(25))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Indica la fecha aproximada de ingreso a tu trabajo actual
      </Typography>
      <div className={spaceStyle.space2} />
      <TrabajoActual
        onChange={setTrabajoActual}
        meses={meses}
        anios={anios}
        indiceMesFromState={0}
        indiceAnioFromState={anios.length-1}
      />  
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(
              updateForm("ingresoTrabajoActual", ingresoTrabajoActual)
            );
            dispatch(handleSetStep(step + 1));
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default TrabajoActualContainer;
