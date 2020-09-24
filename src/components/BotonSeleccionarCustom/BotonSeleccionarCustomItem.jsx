import React from "react";
import { Format } from "../../helpers/strings";

const BotonSeleccionarCustomItem = ({ nombre }) => {
  return (
    <div style={{ textAlign: "center" }}>
<span style={{ fontSize: "14px", fontWeight: "bold" }}>{Format.formatizar(nombre)}</span> <br />
    </div>
  );
};

export default BotonSeleccionarCustomItem;
