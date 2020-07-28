import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";

const SeleccionarSucursalTrabajo = () => {
  const dispatch = useDispatch();
  const { buttonAchs, root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(8))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la sucursal en donde trabajas
      </Typography>
      <BotonSeleccionarCustom
        nombreSucursal={"Av C. Valdovinos"}
        numero={"1523"}
        comunaNombre={"Santiago"}
      />
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
