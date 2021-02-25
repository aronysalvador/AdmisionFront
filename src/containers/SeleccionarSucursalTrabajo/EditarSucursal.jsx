import { useSelector, shallowEqual } from "react-redux";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";
import ErrorSucursal from "./ErrorSucursal";

const EditarSucursal = () => {
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
