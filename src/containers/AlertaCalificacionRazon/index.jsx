import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getRazonAlertaPrincipal } from "./../../redux/actions/AlertaCalificacionRazonAction";

const AlertaCalificacionRazon = () => {
  const {
    addmissionForm: { step, percentage, razonAlertaForm },
  } = useSelector((state) => state, shallowEqual);

  const [tipoJornadaLaboral, setTipoJornadaLaboral] = useState(() => {
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
        dispatch={() => dispatch(handleSetStep(90))}
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
            key={razonAlerta.key}
            data={razonAlerta}
            itemForm={"razonAlertaForm"}
            selected={razonAlerta.key === tipoJornadaLaboral.id}
            step={90.3}
          >
            <BotonSeleccionarCustomItem {...razonAlerta} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default AlertaCalificacionRazon;
