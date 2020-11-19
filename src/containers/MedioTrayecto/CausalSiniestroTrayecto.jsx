import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField, InputAdornment } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { siniestroStyle } from "../../css/siniestroStyle";
import { IconButton } from "material-ui";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";

const CausalSiniestroTrayecto = () => {
  let {
    addmissionForm: { percentage, medioTransporteSiniestro },
  } = useSelector((state) => state, shallowEqual);

  const [medioTransporte, setMedioTransporte] = useState(() => {
    return !medioTransporteSiniestro ? "" : medioTransporteSiniestro;
  });
  const [medioTransporteValid, setMedioTransporteValid] = useState(true);
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const { mobileCaption } = siniestroStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.7))}//6.01
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
        ¿Cuál fue la 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;causa del accidente
          </Grid>        
          &nbsp;?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Mecanismo Causal
          </Typography>
          <TextField
            autoComplete
            helperText={
              !medioTransporteValid && "Debes ingresar al menos un medio de transporte"
            }
            error={!medioTransporteValid}
            value={medioTransporte}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setMedioTransporteValid(texto.length > 0);
              setMedioTransporte(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => { setMedioTransporte("") }}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Typography className={mobileCaption}>
            Ejemplo:  Caída, golpe, atropello, otros.
          </Typography>
          <div className={spaceStyle.space2} />
          <Typography className={comunClass.tituloTextBox}>
            Posible Causa
          </Typography>
          <TextField
            autoComplete
            helperText={
              !medioTransporteValid && "Debes ingresar al menos un medio de transporte"
            }
            error={!medioTransporteValid}
            value={medioTransporte}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setMedioTransporteValid(texto.length > 0);
              setMedioTransporte(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => { setMedioTransporte("") }}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Typography className={mobileCaption}>
            Ejemplo: Desnivel en el piso, poca visibilidad.
          </Typography>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            disabled={medioTransporte.length <= 3 || !medioTransporteValid}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
              dispatch(updateForm("medioTransporteSiniestro", medioTransporte));
              dispatch(handleSetStep(6)); //6.03
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

export default CausalSiniestroTrayecto;
