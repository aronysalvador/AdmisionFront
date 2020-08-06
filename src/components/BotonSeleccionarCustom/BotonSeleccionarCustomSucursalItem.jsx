import React from "react";

const BotonSeleccionarCustomSucursalItem = ({ nombre, codigo, id_region }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px" }}>{nombre}</span> <br />
        <span style={{ fontSize: "14px" }}>{codigo}</span>
      </div>
      <span style={{ fontSize: "12px" }}>{id_region}</span>
    </>
  );
};

export default BotonSeleccionarCustomSucursalItem;
