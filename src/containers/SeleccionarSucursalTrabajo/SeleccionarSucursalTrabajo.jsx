import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { sucursalesOficina } from "../../util/fakeApi";

const SeleccionarSucursalTrabajo = () => {
  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(100))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la sucursal en donde trabajas
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {sucursalesOficina.map((sucursal) => (
          <BotonSeleccionarCustom {...sucursal} />
        ))}
      </div>
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
