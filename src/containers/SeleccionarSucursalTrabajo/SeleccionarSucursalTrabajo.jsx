import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";

const SeleccionarSucursalTrabajo = () => {
  const sucursales = [
    {
      id: 1,
      nombreSucursal: "Av Vicuña Mackenna",
      numero: 1200,
      comunaNombre: "Santiago",
    },
    {
      id: 2,
      nombreSucursal: "Padre Mariano",
      numero: 789,
      comunaNombre: "Providencia",
    },
    // {
    //   id: 3,
    //   nombreSucursal: "Av Cobres Vitacura",
    //   numero: 7890,
    //   comunaNombre: "Vitacura",
    // },
    // {
    //   id: 4,
    //   nombreSucursal: "Plaza Maipu",
    //   numero: 2000,
    //   comunaNombre: "Maipu",
    // },
    // {
    //   id: 5,
    //   nombreSucursal: "Vicuña Mackenna",
    //   numero: 1200,
    //   comunaNombre: "La Florida",
    // },
  ];

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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {sucursales.map((sucursal) => (
          <BotonSeleccionarCustom {...sucursal} />
        ))}
      </div>
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
