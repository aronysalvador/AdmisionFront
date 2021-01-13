import React from "react";
import { getComunStyle } from "../../css/comun";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const AtencionMedica = () => {
  const {
    addmissionForm: { percentage, CamposDocumentos },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("AtencionMedica", respuesta));

    dispatch(updateForm(respuesta === "No" && (
      CamposDocumentos.OtroRecinto = "",
      CamposDocumentos.OtroRecintoSi = "",
      CamposDocumentos.OtroRecintoNo = "x",
      CamposDocumentos.FechaOtroRe = "",
      CamposDocumentos.HoraOtroRec = "",
      CamposDocumentos.CuentaCual = "",
      CamposDocumentos.CuentaConSi = "",
      CamposDocumentos.CuentaConNo = "x",
      "CamposDocumentos", CamposDocumentos
      )))
      
    dispatch(handleSetStep(respuesta === "Si" ? 19.21 : 19.23))
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(18.01))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          ¿Registrar 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;atención médica 
          </Grid>   
          &nbsp;en otro centro?       
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.spaceMin1} />
          </div>
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

export default AtencionMedica;
