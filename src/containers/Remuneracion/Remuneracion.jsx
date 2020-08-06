import React, { useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getRemuneracion } from "../../redux/actions/TipoRemuneracionAction";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";

const Remuneracion = () => {
  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, tipoRemuneracion } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getRemuneracion(""));
  }, []);

  const { data: tipoRemuneracionList } = useSelector(
    (state) => state.tipoRemuneracionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ¿Qué tipo de remuneración tienes?
      </Typography>
      <div className={spaceStyle.space2} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {tipoRemuneracionList.map((remuneracion) => (
          <BotonSeleccionarCustom
            key={remuneracion.id}
            data={remuneracion}
            selected={remuneracion.selected}
            itemForm={"tipoRemuneracion"}
            selected={remuneracion.id === tipoRemuneracion.id}
            step={26}
          >
            <BotonSeleccionarCustomItem {...remuneracion} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default Remuneracion;
