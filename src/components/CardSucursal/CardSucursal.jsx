import React from "react";

const CardSucursal = ({ sucursales }) => {
  const { nombre, codigo, direccion } = sucursales;
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#007A33", fontSize: "20px" }}>Sucursal</h3>
      <div style={{ fontSize: "16px" }}>{nombre}</div>
      <div style={{ fontSize: "16px" }}>{direccion}</div>
      <div style={{ fontSize: "16px" }}>{codigo}</div>
    </div>
  );
};

export default CardSucursal;
