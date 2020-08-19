import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getCategoriaOcupacionalPrincipal } from "./../../redux/actions/CategoriaOcupacionalAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const CategoriaOcupacional = () => {
  const {
    addmissionForm: { percentage, categoriaOcupacionalForm },
  } = useSelector((state) => state, shallowEqual);

  const categoriaOcupacional = !categoriaOcupacionalForm ? "" : categoriaOcupacionalForm

  const dispatch = useDispatch();

  const spaceStyle = getSpaceStyle();

  const initFn = useCallback(() => {
    dispatch(getCategoriaOcupacionalPrincipal(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: categoriaList } = useSelector(
    (state) => state.categoriaOcupacionalForm,
    shallowEqual
  );

  const { root, pregunta } = getComunStyle();

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(22))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona tu categoría ocupacional
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
        {categoriaList.map((categoria) => (
          <BotonSeleccionarCustom
            key={categoria.id}
            data={categoria}
            itemForm={"categoriaOcupacionalForm"}
            selected={categoria.id === categoriaOcupacional.id}
            step={24}
          >
            <BotonSeleccionarCustomItem {...categoria} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default CategoriaOcupacional;
