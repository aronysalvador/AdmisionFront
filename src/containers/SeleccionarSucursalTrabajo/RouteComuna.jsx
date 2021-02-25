import { useSelector, shallowEqual } from "react-redux";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import EditarDireccionSucursal from "./EditarDireccionSucursal";

const RouteComuna = () => {
  const { cantidadSucursales, sucursales } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  if (cantidadSucursales >= 2 && cantidadSucursales <= 6)
    return <SeleccionarSucursalTrabajo sucursalesEmpresa={sucursales} />;
  if (cantidadSucursales > 6) return <EditarDireccionSucursal />;
};

export default RouteComuna;
