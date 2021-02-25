import React, { useState } from "react";
import { Button} from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import TrabajoActual from "../../components/TrabajoActual/TrabajoActual";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const TrabajoActualContainer = () => {
  const spaceStyle = getSpaceStyle();

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { percentage, ingresoTrabajoActual, TrabajadorIndependiente } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const [ ingresoTrabajoActualValue, setIngresoTrabajo ] = useState(
    ingresoTrabajoActual
  );
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ]

  const fnAnios = () => {
    let anios = [];
    let i = 1975;
    for (i; i <= new Date().getFullYear(); i++)
      anios.push(i);

    return anios;
  }

  const anios = fnAnios()

  const comunClass = getComunStyle();
  const dispatch = useDispatch();

  function setTrabajoActual(value) {
    let formattedDate = new Date(value.anio, value.mes, 1);
    setIngresoTrabajo(formattedDate);
  }

  function getAnioIndex() {
    return anios.indexOf(new Date(ingresoTrabajoActualValue).getFullYear());
  }

  let back = TrabajadorIndependiente !== "" ? 25.1 : 25;

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
          dispatch={() => dispatch(handleSetStep(back))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ]}>
          Indica la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            &nbsp;fecha aproximada en que ingresó
          </Grid>
          &nbsp;a su trabajo actual
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <TrabajoActual
          onChange={setTrabajoActual}
          meses={meses}
          anios={anios}
          indiceMesFromState={new Date(ingresoTrabajoActualValue).getMonth()}
          indiceAnioFromState={
            getAnioIndex() === -1 ? anios.length - 1 : getAnioIndex()
          }
        />
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            onClick={() => {
              dispatch(
                updateForm("ingresoTrabajoActual", ingresoTrabajoActualValue)
              );
              dispatch(handleSetStep(26.1));
            }}
          >
            Confirmar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TrabajoActualContainer;
