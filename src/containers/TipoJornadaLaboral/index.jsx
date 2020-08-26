import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getJornadaLaboralPrincipal } from "./../../redux/actions/TipoJornadaLaboralAction";

const TipoJornadaLaboral = () => {
  const {
    addmissionForm: { percentage, tipoJornadaForm },
  } = useSelector((state) => state, shallowEqual);

  const tipoJornadaLaboral = !tipoJornadaForm ? "" : tipoJornadaForm;

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getJornadaLaboralPrincipal(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);


  const { data: tipoJornadaList } = useSelector(
    (state) => state.tipoJornadaLaboralForm,
    shallowEqual
  );

  const { root, titleBlack, titleBlue } = getComunStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(20))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Selecciona la opción que mejor defina el 
        <div className={titleBlue}>
          &nbsp;tipo de jornada
        </div>
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
        {tipoJornadaList.map((tipoJornada) => (
          <BotonSeleccionarCustom
            key={tipoJornada.id}
            data={tipoJornada}
            itemForm={"tipoJornadaForm"}
            selected={tipoJornada.id === tipoJornadaLaboral.id}
            step={22}
          >
            <BotonSeleccionarCustomItem {...tipoJornada} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default TipoJornadaLaboral;
