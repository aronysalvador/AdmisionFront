import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getTiposRemuneracion } from "../../util/fakeApi";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";

const Remuneracion = () => {
  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ¿Que tipo de remuneración tienes?
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {getTiposRemuneracion().map((remuneracion) => (
          <BotonSeleccionarCustom
            key={remuneracion.id}
            data={remuneracion}
            itemForm={"tipoRemuneracion"}
          >
            <BotonSeleccionarCustomItem {...remuneracion} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default Remuneracion;
