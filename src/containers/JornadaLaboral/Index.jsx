import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import JornadaLaboral from "../../components/JornadaLaboral/JornadaLaboral";

const JornadaLaboralContainer = () => {
  const spaceStyle = getSpaceStyle();

  const { step, percentage, inicioJornadaLaboral, finJornadaLaboral } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const [inicioJornadaLaboralValue, setInicioJornada] = useState(inicioJornadaLaboral);
  const [finJornadaLaboralValue, setFinJornada] = useState(finJornadaLaboral);

  const fnHorarios = () => {
    let horarios = [];
    let i = 0;
    let j = 0;
    for (i = 1; i < 24; i++) {
      for (j = 0; j < 2; j++) {
        horarios.push(i + ":" + (j === 0 ? "00" : 30 * j));
      }
    }
    return horarios;
  }

  const horarios = fnHorarios()

  const { buttonAchs, root, bottomElement, titleBlue, titleBlack } = getComunStyle();
  const dispatch = useDispatch();

  function setJornadaLaboral(value) {
    setInicioJornada(value.horaInicio);
    setFinJornada(value.horaFin);
  }

  console.log("INICIO VALUE", inicioJornadaLaboralValue);
  console.log("FIN VALUE", finJornadaLaboralValue);
  

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(21))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        ¿A que hora afirma que 
        <div className={titleBlue}>
          &nbsp;inicia y termina su jornada laboral?
        </div>
      </Typography>
      <div className={spaceStyle.space2} />
      <JornadaLaboral
        onChange={setJornadaLaboral}
        horarios={horarios}
        indiceInicioFromState={horarios.indexOf(inicioJornadaLaboralValue)}
        indiceFinFromState={horarios.indexOf(finJornadaLaboralValue)}
      />
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          onClick={() => {
            dispatch(
              updateForm("inicioJornadaLaboral", inicioJornadaLaboralValue)
            );
            dispatch(
              updateForm("finJornadaLaboral", finJornadaLaboralValue)
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

export default JornadaLaboralContainer;
