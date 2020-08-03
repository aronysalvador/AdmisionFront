import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomSucursalItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSucursalItem";

const SeleccionarSucursalTrabajo = ({ sucursalesEmpresa }) => {
  const [sucursalesEmpresaData, setSucursalesEmpresaData] = useState(() =>
    sucursalesEmpresa.map((y) => {
      return { ...y, isSelected: false };
    })
  );
  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, SucursalEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(100))}
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
        {sucursalesEmpresaData.map((sucursal) => (
          <BotonSeleccionarCustom
            key={sucursal.id}
            data={sucursal}
            itemForm={"SucursalEmpresa"}
            selected={sucursal.id === SucursalEmpresa.id}
          >
            <BotonSeleccionarCustomSucursalItem {...sucursal} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
