import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";
import { getSucursales } from "../../redux/actions/SucursalesAction";
import ErrorSucursal from "./ErrorSucursal";

const EditarSucursal = () => {
  const { rutEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSucursales(rutEmpresa));
  }, []);

  const { data: sucursalesList } = useSelector(
    (state) => state.sucursalesForm,
    shallowEqual
  );

  if (sucursalesList?.length <= 6)
    return <SeleccionarSucursalTrabajo sucursalesEmpresa={sucursalesList} />;
  if (sucursalesList?.length >= 6)
    return <SeleccionarComuna sucursalesEmpresa={sucursalesList} />;
  return <ErrorSucursal />;
};

export default EditarSucursal;
