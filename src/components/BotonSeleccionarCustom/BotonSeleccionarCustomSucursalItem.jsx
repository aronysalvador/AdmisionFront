import React from "react";

const BotonSeleccionarCustomSucursalItem = ({
  nombreSucursal,
  numero,
  comunaNombre,
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px" }}>{nombreSucursal}</span> <br />
        <span style={{ fontSize: "14px" }}>{numero}</span>
      </div>
      <span style={{ fontSize: "12px" }}>{comunaNombre}</span>
    </>
  );
};

export default BotonSeleccionarCustomSucursalItem;
