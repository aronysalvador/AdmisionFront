import React, { useState, useEffect } from "react";
import { ButtonBase } from "@material-ui/core";

const BotonSeleccionarCustom = ({ nombreSucursal, numero, comunaNombre }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "100px",
        borderStyle: "solid",
        borderColor: "black",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px", color: "black" }}>
          {nombreSucursal}
        </span>{" "}
        <br />
        <span style={{ fontSize: "14px", color: "black" }}>{numero}</span>
      </div>
      <span style={{ fontSize: "12px", color: "gray" }}>{comunaNombre}</span>
    </div>
  );
};

export default BotonSeleccionarCustom;
