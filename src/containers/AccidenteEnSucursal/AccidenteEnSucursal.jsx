import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
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
    pregunta,
    bottomElement,
    buttonAchs2,
    textoResaltado
  } = getComunStyle();
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
          className={pregunta}
         >
          ¿Accidente ocurrió en  
          <div className={textoResaltado}
              style={{display: "contents"}}
          >
             &nbsp;sucursal a la que pertenece el trabajador?
          </div>
        </Typography>
      </div>

      <div className={bottomElement}>
        <div className={spaceStyle.spaceMin1}></div>
        <Button
          variant="contained"
          className={buttonAchs}
          onClick={() => handleOnClick("Si")}
        >
          Si
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
