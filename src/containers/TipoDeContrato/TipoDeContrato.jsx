import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getContrato } from "../../redux/actions/TipoContratoAction";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";

const TipoDeContrato = () => {
  const dispatch = useDispatch();
  const { root, titleBlue, titleBlack } = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const { step, percentage, tipoDeContrato } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const initFn = useCallback(() => {
    dispatch(getContrato(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: contratoList } = useSelector(
    (state) => state.tipoContratoForm,
    shallowEqual
  );

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        ¿Qué  
        <div className={titleBlue}>
          &nbsp;tipo de contrato
        </div>
        &nbsp;tiene el paciente?
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
        {contratoList.map((contrato) => (
          <BotonSeleccionarCustom
            key={contrato.id}
            data={contrato}
            itemForm={"tipoDeContrato"}
            selected={tipoDeContrato.id === contrato.id}
            step={24}
          >
            <BotonSeleccionarCustomItem {...contrato} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default TipoDeContrato;
