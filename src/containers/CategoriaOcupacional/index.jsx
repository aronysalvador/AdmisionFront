import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getCategoriaOcupacionalPrincipal } from "./../../redux/actions/CategoriaOcupacionalAction";

const CategoriaOcupacional = () => {
  const {
    addmissionForm: { step, percentage, categoriaOcupacionalForm },
  } = useSelector((state) => state, shallowEqual);

  const [tipoJornadaLaboral, setTipoJornadaLaboral] = useState(() => {
    return !categoriaOcupacionalForm ? "" : categoriaOcupacionalForm;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriaOcupacionalPrincipal(""));
  }, []);

  const { data: categoriaList } = useSelector(
    (state) => state.categoriaOcupacionalForm,
    shallowEqual
  );

  const { root, pregunta } = getComunStyle();

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
        {categoriaList.map((categoria) => (
          <BotonSeleccionarCustom
            key={categoria.id}
            data={categoria}
            itemForm={"categoriaOcupacionalForm"}
          >
            <BotonSeleccionarCustomItem {...categoria} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default CategoriaOcupacional;
