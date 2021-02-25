import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const TrabajadorIndependiente = () => {
  const {
    addmissionForm: { percentage }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("TrabajadorIndependiente", respuesta));
    dispatch(handleSetStep(26.1)); // ++stepx
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id='TrabajadorIndependiente-BtnBack'
          dispatch={() => dispatch(handleSetStep(19.4))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ]}>
          ¿<Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            Paciente declara renta&nbsp;
           </Grid>
          en servicios impuestos internos como trabajador independiente?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.spaceMin1} />
          </div>
          <Button
            id='TrabajadorIndependiente-Btn1'
            variant='contained'
            className={comunClass.buttonAchs}
            onClick={() => handleOnClick("Si")}
          >
            Sí
          </Button>
          <div className={spaceStyle.spaceMin1} />
          <Button
            id='TrabajadorIndependiente-Btn2'
            className={comunClass.buttonAchs2}
            onClick={() => handleOnClick("No")}
          >
            No
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TrabajadorIndependiente;
