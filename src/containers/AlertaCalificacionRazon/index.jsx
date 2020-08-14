import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getRazonAlertaPrincipal } from "./../../redux/actions/AlertaCalificacionRazonAction";
import BotonSeleccionarCustomItemAlerta from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemAlerta";

const AlertaCalificacionRazon = () => {
  const {
    addmissionForm: { percentage, razonAlertaForm },
  } = useSelector((state) => state, shallowEqual);

  const [razon, setRazon] = useState(() => {
    return !razonAlertaForm ? "" : razonAlertaForm;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRazonAlertaPrincipal(""));
  }, []);

  const { data: razonAlertaList } = useSelector(
    (state) => state.razonAlertaForm,
    shallowEqual
  );

  const { root, pregunta } = getComunStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(26.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la razón de la alerta
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
        {razonAlertaList.map((razonAlerta) => (
          <BotonSeleccionarCustom
            key={razonAlerta.glosa}
            data={razonAlerta}
            itemForm={"razonAlertaForm"}
            selected={razonAlerta.glosa === razon.glosa}
          >
            <BotonSeleccionarCustomItemAlerta {...razonAlerta} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default AlertaCalificacionRazon;
