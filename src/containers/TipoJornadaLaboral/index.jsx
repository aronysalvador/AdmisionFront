import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getJornadaLaboralPrincipal } from "./../../redux/actions/TipoJornadaLaboralAction";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";

const TipoJornadaLaboral = () => {
  const {
    addmissionForm: { percentage, tipoJornadaForm },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const tipoJornadaLaboral = !tipoJornadaForm ? "" : tipoJornadaForm;

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getJornadaLaboralPrincipal(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: tipoJornadaList } = useSelector(
    (state) => state.tipoJornadaLaboralForm,
    shallowEqual
  );

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(20))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Selecciona la opción que mejor defina el 
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;tipo de jornada
          </Grid>          
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.cardsButtonAlign}>
          {tipoJornadaList.map((tipoJornada) => (
            <BotonSeleccionarCustom
              key={tipoJornada.id}
              data={tipoJornada}
              itemForm={"tipoJornadaForm"}
              selected={tipoJornada.id === tipoJornadaLaboral.id}
              step={22}
            >
              <BotonSeleccionarCustomItem {...tipoJornada} />
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

export default TipoJornadaLaboral;
