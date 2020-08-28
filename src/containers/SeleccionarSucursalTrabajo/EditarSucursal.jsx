import React, { useEffect, useCallback} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SeleccionarSucursalTrabajo from "./SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./SeleccionarComuna";
import { getSucursales } from "../../redux/actions/SucursalesAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import ErrorSucursal from "./ErrorSucursal";

const EditarSucursal = () => {

  // const dispatch = useDispatch();
  // const { rutEmpresa } = useSelector(
  //   (state) => state.addmissionForm,
  //   shallowEqual
  // );

  // const initFn = useCallback(() => {
  //   dispatch(getSucursales(rutEmpresa));
  // }, [dispatch, rutEmpresa]);

  // useEffect(() => {
  //   initFn();
  // }, [initFn]);


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
