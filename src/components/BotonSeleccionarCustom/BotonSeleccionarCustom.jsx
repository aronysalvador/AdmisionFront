import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";

const BotonSeleccionarCustom = ({
  nombreSucursal,
  numero,
  comunaNombre,
  key,
}) => {
  const sucursal = {
    nombreSucursal,
    numero,
    comunaNombre,
    key,
  };
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const { botonSeleccionado } = getComunStyle();
  console.log({ sucursal });
  return (
    <div
      onClick={() => {
        setIsSelected((selected) => !selected);
        dispatch(updateForm("SucursalEmpresa", sucursal));
      }}
      className={isSelected === true ? botonSeleccionado : ""}
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "100px",
        borderStyle: "solid",
        borderColor: "#787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px" }}>{nombreSucursal}</span> <br />
        <span style={{ fontSize: "14px" }}>{numero}</span>
      </div>
      <span style={{ fontSize: "12px" }}>{comunaNombre}</span>
    </div>
  );
};

export default BotonSeleccionarCustom;
