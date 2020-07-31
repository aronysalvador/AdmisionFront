import React from "react";

const BotonSeleccionarCustomItem = ({ nombre }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "14px" }}>{nombre}</span> <br />
    </div>
  );
};

export default BotonSeleccionarCustomItem;
