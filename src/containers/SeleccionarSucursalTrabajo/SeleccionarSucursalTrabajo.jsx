import React from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomSucursalItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSucursalItem";

const SeleccionarSucursalTrabajo = ({ sucursalesEmpresa }) => { 
  const dispatch = useDispatch();
  const { root, titleBlack, titleBlue } = getComunStyle();

  const { percentage, SucursalEmpresa: SucursalEmpresaObjeto } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const handlerGuradarSucursalTexto = (itemForm, data, step) => {
    const { nombre, direccion, codigo } = data;
    const sucursalTexto = nombre;
    dispatch(updateForm(itemForm, sucursalTexto));
    dispatch(updateForm("DireccionEmpresa", direccion));
    dispatch(updateForm("codigoSucursal", codigo));
  };
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.4))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Identifica 
        <div className={titleBlue}>
          &nbsp;la sucursal </div> 
          &nbsp;en donde trabaja
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
        {sucursalesEmpresa.map((sucursal) => (
          <BotonSeleccionarCustom
            key={sucursal.id}
            data={sucursal}
            itemForm={"SucursalEmpresa"}
            selected={sucursal.codigo === SucursalEmpresaObjeto.codigo}
            step={5.1}
            handlerGuardarData={handlerGuradarSucursalTexto}
          >
            <BotonSeleccionarCustomSucursalItem {...sucursal} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
