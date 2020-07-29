import React, { useState, useEffect } from "react";
import { sucursalesOficina } from "../../util/fakeApi";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";

const EditarSucursal = () => {
  const [cantidadSucursales] = useState(() => sucursalesOficina.length);

  if (cantidadSucursales <= 6)
    return <SeleccionarSucursalTrabajo sucursalesEmpresa={sucursalesOficina} />;
  if (cantidadSucursales >= 6)
    return <SeleccionarComuna sucursalesEmpresa={sucursalesOficina} />;
  return <div>No tiene sucursales</div>;
};

export default EditarSucursal;
