import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";

const TrabajadorIndependiente = () => {
  const {
    addmissionForm: { percentage},
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("TrabajadorIndependiente", respuesta));
    dispatch(handleSetStep(26)); //++stepx
  };

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
          dispatch={() => dispatch(handleSetStep(25))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography
          variant="h1"
          component="h1"
          className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
        >
          ¿<Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            Paciente declara renta&nbsp;
          </Grid>   
          en servicios impuestos internos como trabajador independiente?    
        </Typography>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <div className={spaceStyle.spaceMin1}></div>
          <Button
            variant="contained"
            className={comunClass.buttonAchs}
            onClick={() => handleOnClick("Si")}
          >
            Sí
          </Button>
          <div className={spaceStyle.spaceMin1}></div>
          <Button
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
