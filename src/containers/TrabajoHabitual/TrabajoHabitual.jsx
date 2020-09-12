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
    bottomElement,
    buttonAchs2,
    titleBlack,
    titleBlue,
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
      <Typography className={titleBlack} variant="subtitle2">
        ¿Al momento del accidente, desarrollaba su
        <div className={titleBlue}>
          &nbsp;trabajo habitual
        </div>?
      </Typography>

      <div className={bottomElement}>
        <TrabajoHabitualCard />
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          variant="contained"
          className={buttonAchs}
          onClick={() => handleOnClick("Si")}
        >
          Sí
        </Button>
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          className={buttonAchs2}
          onClick={() => handleOnClick("No")}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default TrabajoHabitual;
