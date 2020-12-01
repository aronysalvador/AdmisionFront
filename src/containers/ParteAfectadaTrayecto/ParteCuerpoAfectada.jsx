import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField, InputAdornment } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { IconButton } from "material-ui";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';

const ParteCuerpoAfectada = () => {
  let {
    addmissionForm: { percentage, otrasCircunstanciasSiniestro, CamposDocumentos },
  } = useSelector((state) => state, shallowEqual);

  const [parteAfectada, setParteAfectada] = useState("");
  const [parteAfectadaValid, setParteAfectadaValid] = useState(true);

  const [otrasCircunstancias, setOtrasCircunstancias] = useState(() => {
    return !otrasCircunstanciasSiniestro ? "" : otrasCircunstanciasSiniestro;
  });
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(8.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Ahora, completa la información adicional del accidente 
          {/* <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;causa del accidente
          </Grid> */}
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src={relato} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Ingresa la parte del cuerpo lesionada
          </Typography>
          <TextField
            autoComplete
            helperText={!parteAfectadaValid && "Debes ingresar al menos una parte del cuerpo lesionada"}
            error={!parteAfectadaValid}
            label={parteAfectada}
            value={parteAfectada}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setParteAfectadaValid(texto.length > 0);
              setParteAfectada(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => { setParteAfectada("") }}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {/* <Typography className={mobileCaption}>
            Ejemplo:  Caída, golpe, atropello, otros.
          </Typography> */}

          <div className={spaceStyle.space2} />

          <Typography className={comunClass.tituloTextBox}>
            Ingresa la información adicional al relato
          </Typography>
          <TextField
            // id="txtRespuesta"
            // placeholder={placeholder}
            label=""
            value={otrasCircunstancias}
            margin="dense"
            variant="outlined"
            fullWidth
            rows={5}
            multiline
            inputProps={{ maxLength: 200 }}
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setOtrasCircunstancias(texto);
            }}
          />
        <label className={comunClass.pullRight}>{otrasCircunstancias.length}/200</label>
          {/* <TextField
            autoComplete
            helperText={
              !otrasCircunstanciasValid && "Debes ingresar al menos una posible causa"
            }
            error={!otrasCircunstanciasValid}
            value={otrasCircunstancias}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setOtrasCircunstanciasValid(texto.length > 0);
              setOtrasCircunstancias(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => { setOtrasCircunstancias("") }}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Typography className={mobileCaption}>
            Ejemplo: Desnivel en el piso, poca visibilidad.
          </Typography> */}
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            disabled={(parteAfectada.length <= 3 || !parteAfectadaValid)}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
              let respParteAfecta = [...CamposDocumentos, {tag:"ParteAfecta", valor: parteAfectada}, {tag:"Otras", valor: otrasCircunstancias}];
              dispatch(updateForm("CamposDocumentos", respParteAfecta));
              dispatch(handleSetStep(10));
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

export default ParteCuerpoAfectada;
