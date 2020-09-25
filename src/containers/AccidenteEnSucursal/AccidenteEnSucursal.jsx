import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";

const AccidenteEnSucursal = () => {
  const {
    addmissionForm: { percentage },
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const {
    root,
    buttonAchs,
    bottomElement,
    buttonAchs2,
    titleBlack, 
    titleBlue } = getComunStyle();

  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("AccidenteEnSucursal", respuesta));
    dispatch(handleSetStep(13)); //++stepx
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(12))}
        percentage={percentage}
      />
      <div>
        <Typography
          variant="h1"
          component="h1"
          className={titleBlack}
         >
          ¿Accidente ocurrió en  
          <Grid component="span"  className={titleBlue}>
              &nbsp;sucursal a la que pertenece el trabajador?
          </Grid>          
        </Typography>
      </div>

      <div className={bottomElement}>
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          variant="contained"
          className={buttonAchs}
          onClick={() => handleOnClick("Si")}
        >
          Sí
        </Button>
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          className={buttonAchs2}
          onClick={() => handleOnClick("No")}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default AccidenteEnSucursal;
