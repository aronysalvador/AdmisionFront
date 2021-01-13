import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField, InputAdornment } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { siniestroStyle } from "../../css/siniestroStyle";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { IconButton } from "material-ui";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg'

const LugarReferenciaSiniestro = () => {
  let {
    addmissionForm: { step, percentage, lugarReferenciaSiniestro, tipoSiniestro },
  } = useSelector((state) => state, shallowEqual);
  let stepx = step;
  const [lugarReferencia, setLugarReferencia] = useState(() => {
    return !lugarReferenciaSiniestro ? "" : lugarReferenciaSiniestro;
  });
  const [isLugarReferenciaValid, setIsLugarReferenciaValid] = useState(true);
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const { mobileCaption } = siniestroStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(--stepx))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Pide al paciente el
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;sitio específico 
          </Grid>        
          &nbsp;de donde ocurrió el accidente
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Referencia
          </Typography>
          <TextField
            helperText={
              !isLugarReferenciaValid && "Debes ingresar al menos una referencia"
            }
            error={!isLugarReferenciaValid}
            value={lugarReferencia}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setIsLugarReferenciaValid(texto.length > 0);
              setLugarReferencia(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setLugarReferencia("");
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
              ),
            }}
          />
          <Typography className={mobileCaption}>
            Ejemplo: Piso 21, Área 453, Puesto 12A
          </Typography>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            disabled={lugarReferencia.length === 0 || !isLugarReferenciaValid}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
                dispatch(updateForm("lugarReferenciaSiniestro", lugarReferencia));
                if(tipoSiniestro.Id === 2) {//Accidente de Trayecto
                  dispatch(updateForm("AccidenteEnSucursal", "no"))
                }                
                dispatch(handleSetStep("x",12))
            }}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default LugarReferenciaSiniestro;
