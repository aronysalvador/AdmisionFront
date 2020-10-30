import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";

const AccidenteEnSucursal = () => {
  const {
    addmissionForm: { percentage },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("AccidenteEnSucursal", respuesta));
    dispatch(handleSetStep(13)); //++stepx
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
          dispatch={() => dispatch(handleSetStep(12))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography
          variant="h1"
          component="h1"
          className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
        >
          ¿Accidente ocurrió en  
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;sucursal a la que pertenece el trabajador?
          </Grid>          
        </Typography>
        <div className={comunClass.displayDeskInline}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" />
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

export default AccidenteEnSucursal;
