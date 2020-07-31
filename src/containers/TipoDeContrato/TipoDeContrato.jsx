import React from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getTiposDeContrato } from "../../util/fakeApi";
import BotonSeleccionarCustomSucursalItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSucursalItem";

const TipoDeContrato = () => {
  const dispatch = useDispatch();
  const { root, pregunta, bottomElement } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, sucursales } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(100))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        ¿Que tipo de contrato tienes?
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
        {getTiposDeContrato.map((contrato) => (
          <BotonSeleccionarCustom
            key={contrato.id}
            data={contrato}
            itemForm={"SucursalEmpresa"}
          >
            <BotonSeleccionarCustomSucursalItem {...contrato} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default TipoDeContrato;
