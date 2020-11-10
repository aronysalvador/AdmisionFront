import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import { getRazonAlertaPrincipal } from "./../../redux/actions/AlertaCalificacionRazonAction";
import BotonSeleccionarCustomItemAlerta from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemAlerta";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const AlertaCalificacionRazon = () => {
  const {
    addmissionForm: { percentage, razonAlertaForm },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const razon =  !razonAlertaForm ? "" : razonAlertaForm 

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getRazonAlertaPrincipal(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: razonAlertaList } = useSelector(
    (state) => state.razonAlertaForm,
    shallowEqual
  );

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(26.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;la razón de la alerta
          </Grid>          
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDeskCardBtn}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {razonAlertaList && razonAlertaList.map((razonAlerta) => (
            <BotonSeleccionarCustom
              key={razonAlerta.glosa}
              data={razonAlerta}
              itemForm={"razonAlertaForm"}
              selected={razonAlerta.glosa === razon.glosa}
            >
              <BotonSeleccionarCustomItemAlerta {...razonAlerta} />
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

export default AlertaCalificacionRazon;
