import { useState } from "react";
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
import relato from './../../img/relato.svg';

const CausalSiniestroTrayecto = () => {
  let {
    addmissionForm: { percentage, CamposDocumentos }
  } = useSelector((state) => state, shallowEqual);

  const [ mecanismoCausal, setMecanismoCausal ] = useState(() => {
    return !CamposDocumentos.Mecanismo ? "" : CamposDocumentos.Mecanismo;
  });
  const [ mecanismoCausalValid, setMecanismoCausalValid ] = useState(true);

  const [ posibleCausa, setPosibleCausa ] = useState(() => {
    return !CamposDocumentos.PosibleCaus ? "" : CamposDocumentos.PosibleCaus;
  });
  const [ posibleCausaValid, setPosibleCausaValid ] = useState(true);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const { mobileCaption } = siniestroStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"CausalSiniestroTrayecto-BtnBack"}
          dispatch={() => dispatch(handleSetStep(6.02))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
        ¿Cuál fue la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;causa del accidente
          </Grid>
          &nbsp;?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={relato} className={comunClass.imgPrimaryWidth} />
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
            id={"CausalSiniestroTrayecto-Lbl1"}
            autoComplete='off'
            helperText={!mecanismoCausalValid && "Debes ingresar al menos un mecanismo causal"}
            error={!mecanismoCausalValid}
            value={mecanismoCausal}
            variant='outlined'
            size='small'
            margin='dense'
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setMecanismoCausalValid(texto.length > 0);
              setMecanismoCausal(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => { setMecanismoCausal("") }}>
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
            id={"CausalSiniestroTrayecto-Lbl2"}
            autoComplete='off'
            helperText={!posibleCausaValid && "Debes ingresar al menos una posible causa"}
            error={!posibleCausaValid}
            value={posibleCausa}
            variant='outlined'
            size='small'
            margin='dense'
            required
            fullWidth
            onChange={(e) => {
              let texto = Format.caracteresInvalidos(e.target.value);
              setPosibleCausaValid(texto.length > 0);
              setPosibleCausa(texto);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => { setPosibleCausa("") }}>
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
            id={"CausalSiniestroTrayecto-Btn1"}
            disabled={(mecanismoCausal?.length <= 3 || !mecanismoCausalValid) || (posibleCausa?.length <= 3 || !posibleCausaValid)}
            className={comunClass.buttonAchs}
            variant='contained'
            onClick={() => {
              dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, Mecanismo: mecanismoCausal, PosibleCaus: posibleCausa}));
              dispatch(handleSetStep(6.06));
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
