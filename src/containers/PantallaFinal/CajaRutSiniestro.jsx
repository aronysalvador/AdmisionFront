import React from "react";

const CajaRutSiniestro = ({ textoPrincipal, textoSecundario }) => {
  return (
    <div
      style={{
        width: "48%",
        border: "1px solid #787878",
        borderRadius: "10px",
        padding: "10px",
        height: "65px",
        paddingBottom: "5px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <span
          style={{ color: "#373737", fontWeight: "bold", fontSize: "17px" }}
        >
          {textoPrincipal}
        </span>
        <span
          style={{ color: "#787878", fontWeight: "bold", fontSize: "13px" }}
        >
          {textoSecundario}
        </span>
      </div>
    </div>
  );
};

export default CajaRutSiniestro;
