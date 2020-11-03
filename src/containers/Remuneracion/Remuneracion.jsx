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
import Header from "../../components/header/index";

const Remuneracion = () => {
  const dispatch = useDispatch();
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage, tipoRemuneracion } = useSelector(
    (state) => state.addmissionForm, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const initFn = useCallback(() => {
    dispatch(getRemuneracion(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: tipoRemuneracionList } = useSelector(
    (state) => state.tipoRemuneracionForm, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          ¿Qué tipo de  
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;remuneración
          </Grid>         
          &nbsp;tiene el paciente?
        </Typography>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDesk}>
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
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default Remuneracion;
