import React from "react";

const BotonSeleccionarCustomSucursalItem = ({ 
  direccion,
  comuna
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>{direccion}</span> <br />
        <span style={{ fontSize: "14px", color: "#787878" }}>{comuna}</span>

      </div>
      {/* <span style={{ fontSize: "12px" }}>{id_region}</span> */}
    </>
  );
};

export default BotonSeleccionarCustomSucursalItem;
