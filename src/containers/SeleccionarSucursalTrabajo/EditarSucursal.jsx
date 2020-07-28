import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { sucursalesOficina } from "../../util/fakeApi";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";

const EditarSucursal = () => {
  const [cantidadSucursales] = useState(() => sucursalesOficina.length);

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  if (cantidadSucursales <= 6) return <SeleccionarSucursalTrabajo />;
  if (cantidadSucursales > 6) return <SeleccionarComuna />;
  return <div>No tiene sucursales</div>;
};

export default EditarSucursal;
