import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import AccidenteEnSucursalCard from "./AccidenteEnSucursalCard";

const AccidenteEnSucursal = () => {
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
    dispatch(updateForm("AccidenteEnSucursal", respuesta));
    dispatch(handleSetStep(13)); //++stepx
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(12))}
        percentage={percentage}
      />
      <Typography className={pregunta} variant="subtitle2">
        Al momento del accidente,
      </Typography>
      <Typography className={pregunta} variant="subtitle2">
        ¿Te encontrabas en la sucursal donde trabajas?
      </Typography>

      <div className={bottomElement}>
        <AccidenteEnSucursalCard />
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

export default AccidenteEnSucursal;
