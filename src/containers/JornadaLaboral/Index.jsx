import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import JornadaLaboral from "../../components/JornadaLaboral/JornadaLaboral";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const JornadaLaboralContainer = () => {
  const spaceStyle = getSpaceStyle();

  const { step, percentage, inicioJornadaLaboral, finJornadaLaboral } = useSelector(
    (state) => state.addmissionForm, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const [inicioJornadaLaboralValue, setInicioJornada] = useState(inicioJornadaLaboral);
  const [finJornadaLaboralValue, setFinJornada] = useState(finJornadaLaboral);

  const fnHorarios = () => {
    let horarios = [];
    let i = 0;
    let j = 0;
    for (i = 1; i < 24; i++) {
      for (j = 0; j < 2; j++) {
        horarios.push(i + ":" + (j === 0 ? "00" : 30 * j));
      }
    }
    return horarios;
  }

  const horarios = fnHorarios()

  const comunClass = getComunStyle();
  const dispatch = useDispatch();

  function setJornadaLaboral(value) {
    setInicioJornada(value.horaInicio);
    setFinJornada(value.horaFin);
  }

  console.log("INICIO VALUE", inicioJornadaLaboralValue);
  console.log("FIN VALUE", finJornadaLaboralValue);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(21))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          ¿A qué hora 
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;inicia y termina su jornada laboral?
          </Grid>           
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        <JornadaLaboral
          onChange={setJornadaLaboral}
          horarios={horarios}
          indiceInicioFromState={horarios.indexOf(inicioJornadaLaboralValue)}
          indiceFinFromState={horarios.indexOf(finJornadaLaboralValue)}
        />
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            onClick={() => {
              dispatch(
                updateForm("inicioJornadaLaboral", inicioJornadaLaboralValue)
              );
              dispatch(
                updateForm("finJornadaLaboral", finJornadaLaboralValue)
              );
              dispatch(handleSetStep(step + 1));
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

export default JornadaLaboralContainer;
