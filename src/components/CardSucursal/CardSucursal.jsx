import React, { useState, useEffect } from "react";

const CardSucursal = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#007A33", fontSize: "20px" }}>Sucursal</h3>
      <div style={{ fontSize: "16px", color: "20px" }}>
        Av Carlos Valdovinos 560
      </div>
      <div style={{ fontSize: "16px", color: "20px" }}>
        Santiago,Región Metropolitana
      </div>
      <div style={{ fontSize: "16px", color: "20px" }}>RUT: 25.951.215-8</div>
    </div>
  );
};

export default CardSucursal;
