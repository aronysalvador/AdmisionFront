import React, { useEffect, useCallback, useState } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustomSingle from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSingle";
import { getTiposAccidenteTrayecto } from "../../redux/actions/TrayectoAction";
import BotonSeleccionarCustomItemTipoAccidenteTrayecto from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemTipoAccidenteTrayecto";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const TipoAccidenteTrayecto = () => {
  const {
    addmissionForm: { percentage, tipoAccidenteTrayectoForm },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const [tipoAccidente, setTipoAccidente] = useState(() => {
    return !tipoAccidenteTrayectoForm ? "" : tipoAccidenteTrayectoForm;
  });
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getTiposAccidenteTrayecto());
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: tipoAccidenteTrayectoList } = useSelector((state) => state.tipoAccidenteTrayectoForm, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.7))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona la opción que
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;describa la ruta del accidente de trayecto
          </Grid>          
        </Grid>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.boxDeskCardBtn}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexFlow: "column"
          }}
        >
          {tipoAccidenteTrayectoList && tipoAccidenteTrayectoList.map((tipo) => (
          
            <BotonSeleccionarCustomSingle
              key={tipo.key}
              data={tipo}
              itemForm={"tipoAccidenteTrayectoForm"}
              selected={tipo.key === tipoAccidente.codigo}
            >
              <BotonSeleccionarCustomItemTipoAccidenteTrayecto {...tipo} />
            </BotonSeleccionarCustomSingle>
          ))}
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TipoAccidenteTrayecto;
