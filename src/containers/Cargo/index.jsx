import { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from "material-ui";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg'

const Cargo = () => {
  const {
    addmissionForm: { step, percentage, cargoForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  // State
  const [ cargo, saveCargo ] = useState(() => {
    return !cargoForm ? "" : cargoForm;
  });

  const [ error, setError ] = useState(false);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const dispatch = useDispatch();

  const clickSendCargo = () => {
    // Validar Formulario
    if (cargo.length < 5) {
      setError(true);

      return;
    }
    setError(false);
    dispatch(updateForm("cargoForm", cargo));
    dispatch(handleSetStep(step + 1));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(19.4))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ]}>
          ¿Cuál es el
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            &nbsp;cargo
          </Grid>
          &nbsp;del paciente en la empresa?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Cargo
          </Typography>
          <div>
            <TextField
              id='cargo'
              value={cargo}
              onChange={(e) => saveCargo(Format.caracteresInvalidos(e.target.value))}
              helperText={
                error
                  ? "Debe ingresar al menos 5 caracteres"
                  : "Ejemplo: Analista, Operario, Maestro"
              }
              error={error}
              margin='dense'
              variant='outlined'
              autoComplete='off'
              type='text'
              inputProps={{ maxLength: 25 }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                      <IconButton
                        onClick={() => {
                          saveCargo("");
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            variant='contained'
            className={comunClass.buttonAchs}
            disabled={!cargo}
            onClick={() => clickSendCargo()}
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

export default Cargo;
