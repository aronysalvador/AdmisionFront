import React from "react";
import {  useSelector, shallowEqual } from "react-redux";

const CardSucursal = ({ sucursales }) => {
  const {   direccion, region } = sucursales;

  const {
    rutEmpresa
  } = useSelector((state) => state.addmissionForm, shallowEqual);
  
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#007A33", fontSize: "20px" }}>Sucursal</h3>
      {/* <div style={{ fontSize: "16px" }}>{nombre}</div> */}
      <div style={{ fontSize: "16px" }}>{direccion}</div>
      <div style={{ fontSize: "16px" }}>{region}</div>
      <div style={{ fontSize: "16px" }}>Rut: {rutEmpresa}</div>
    </div>
  );
};

export default CardSucursal;
