import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomSucursalItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSucursalItem";

const SeleccionarSucursalTrabajo = ({ sucursalesEmpresa }) => {
  console.log({ sucursalesEmpresa });

  const [sucursalesEmpresaData, setSucursalesEmpresaData] = useState(
    sucursalesEmpresa
  );

  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { percentage, SucursalEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const handlerGuradarSucursalTexto = (itemForm, data, step) => {
    // const { comunaNombre, nombreSucursal, numero } = data;
    // const sucursalTexto = `${nombreSucursal},${numero}, ${comunaNombre}`;
    const { nombre } = data;
    const sucursalTexto = nombre;
    dispatch(updateForm(itemForm, sucursalTexto));
  };
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.5))}
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
          flexWrap: "wrap",
        }}
      >
        {sucursalesEmpresa.map((sucursal) => (
          <BotonSeleccionarCustom
            key={sucursal.id}
            data={sucursal}
            itemForm={"SucursalEmpresa"}
            selected={sucursal.id == SucursalEmpresa.id}
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
