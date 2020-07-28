import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";

const RouteComuna = () => {
  const { step, percentage, cantidadSucursales, sucursales } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  if (cantidadSucursales >= 2 && cantidadSucursales <= 6)
    return <SeleccionarSucursalTrabajo sucursalesEmpresa={sucursales} />;
};

export default RouteComuna;
