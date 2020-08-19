import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import TrabajoHabitualCard from "./TrabajoHabitualCard";

const TrabajoHabitual = () => {
  const {
    addmissionForm: { step, percentage },
  } = useSelector((state) => state, shallowEqual);
  let stepx = step;

  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    pregunta,
    bottomElement,
    buttonAchs2,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("desarrollarTrabajoHabitual", respuesta));
    dispatch(handleSetStep(++stepx));
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(8.1))}
        percentage={percentage}
      />
      <Typography className={pregunta} variant="subtitle2">
        Al momento del accidente,
      </Typography>
      <Typography className={pregunta} variant="subtitle2">
        ¿Desarrollabas tu trabajo habitual?
      </Typography>

      <div className={bottomElement}>
        <TrabajoHabitualCard />
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          variant="contained"
          className={buttonAchs}
          onClick={() => handleOnClick("Si")}
        >
          Si
        </Button>
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          className={buttonAchs2}
          //variant="outlined"
          onClick={() => handleOnClick("No")}
        >
          No lo estaba
        </Button>
      </div>
    </div>
  );
};

export default TrabajoHabitual;
