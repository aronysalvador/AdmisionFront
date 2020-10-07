import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getRemuneracion } from "../../redux/actions/TipoRemuneracionAction";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';

const Remuneracion = () => {
  const dispatch = useDispatch();
  const { root, titleBlue, titleBlack } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, tipoRemuneracion } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const initFn = useCallback(() => {
    dispatch(getRemuneracion(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);


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
      <Typography className={titleBlack}>
        ¿Qué tipo de  
        <Grid component="span"  className={titleBlue}>
          &nbsp;remuneración
        </Grid>         
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
        {tipoRemuneracionList.map((remuneracion) => (
          <BotonSeleccionarCustom
            key={remuneracion.id}
            data={remuneracion}
            // selected={remuneracion.selected}
            itemForm={"tipoRemuneracion"}
            selected={remuneracion.id === tipoRemuneracion.id}
            step={25}
          >
            <BotonSeleccionarCustomItem {...remuneracion} />
          </BotonSeleccionarCustom>
        ))}
      </div>
    </div>
  );
};

export default Remuneracion;
