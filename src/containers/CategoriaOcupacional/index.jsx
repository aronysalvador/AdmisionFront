import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getJornadaLaboralPrincipal } from "./../../redux/actions/TipoJornadaLaboralAction";

const CategoriaOcupacional = () => {
  const {
    addmissionForm: { step, percentage, tipoJornadaLaboralForm },
  } = useSelector((state) => state, shallowEqual);

  const [tipoJornadaLaboral, setTipoJornadaLaboral] = useState(() => {
    return !tipoJornadaLaboralForm ? "" : tipoJornadaLaboralForm;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJornadaLaboralPrincipal(""));
  }, []);

  const { data: tipoJornadaList } = useSelector(
    (state) => state.tipoJornadaLaboralForm,
    shallowEqual
  );

  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //   const { step, percentage, sucursales } = useSelector(
  //     (state) => state.addmissionForm,
  //     shallowEqual
  //   );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(100))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona tu categoría ocupacional
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
          >
            <BotonSeleccionarCustomItem {...tipoJornada} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default CategoriaOcupacional;
