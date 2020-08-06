import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { sucursalesOficina } from "../../util/fakeApi";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";
import { getSucursales } from "../../redux/actions/SucursalesAction";

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

  console.log({ sucursalesList });
  const [cantidadSucursales] = useState(() => 5);

  if (cantidadSucursales <= 6)
    return (
      <SeleccionarSucursalTrabajo
        sucursalesEmpresa={sucursalesList.slice(0, 4)}
      />
    );
  if (cantidadSucursales >= 6)
    return <SeleccionarComuna sucursalesEmpresa={sucursalesList} />;
  return <div>No tiene sucursales</div>;
};

export default EditarSucursal;
