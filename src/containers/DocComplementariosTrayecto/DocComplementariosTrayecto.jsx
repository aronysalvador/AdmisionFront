import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, TextField, InputAdornment, withStyles } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
// import { siniestroStyle } from "../../css/siniestroStyle";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { IconButton } from "material-ui";
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';


const DocComplementariosTrayecto = () => {
  let {
    addmissionForm: { percentage, CamposDocumentos },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const [anteceOtroC, setAnteceOtroC] = useState(() => {
    return !CamposDocumentos.anteceOtroC ? "" : CamposDocumentos.anteceOtroC;
  });
  const [anteceOtroValid, setAnteceOtroValid] = useState(true);
  
  const comunClass = getComunStyle();
  // const { mobileCaption } = siniestroStyle();
  const spaceStyle = getSpaceStyle();

  const [state, setState] = React.useState({
    antecePartP: false,
    anteceConst: false,
    anteceVideS: false,
    anteceComSe: false,
    anteceOtro: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const BlueCheckbox = withStyles({
    root: {
      '&$checked': {
        color: '#00B2A9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(19.2))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Tiene otros documentos que 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;complementen la declaración
          </Grid>        
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
          {/* 
          <Typography className={mobileCaption}>
            Ejemplo: Piso 21, Área 453, Puesto 12A
          </Typography> */}
          <FormGroup row>
            <FormControlLabel
              control={<BlueCheckbox checked={state.antecePartP} onChange={handleChange} name="antecePartP" />}
              label="Parte policial"
            />
            <FormControlLabel
              control={<BlueCheckbox checked={state.anteceConst} onChange={handleChange} name="anteceConst" />}
              label="Constancia ante carabineros"
            />
            <FormControlLabel 
              control={<BlueCheckbox checked={state.anteceVideS} onChange={handleChange} name="anteceVideS" />} 
              label="Video de cámaras de seguridad" 
            />
            <FormControlLabel
              control={<BlueCheckbox checked={state.anteceComSe} onChange={handleChange} name="anteceComSe" />}
              label="Denuncia en compañía de seguros"
            />
            <FormControlLabel
              control={<BlueCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
              label="Otro"
              renderInput={(params) => (
                <TextField
                  helperText={
                    !anteceOtroValid && "Debes ingresar al menos 5 caracteres"
                  }
                  error={!anteceOtroValid}
                  value={anteceOtroC}
                  variant="outlined"
                  size="small"
                  margin="dense"
                  required
                  fullWidth
                  onChange={(e) => {
                    let texto = Format.caracteresInvalidos(e.target.value);
                    setAnteceOtroValid(texto.length > 0);
                    setAnteceOtroC(texto);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              setAnteceOtroC("");
                            }}
                          >
                            <ClearIcon />
                          </IconButton>
                        </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </FormGroup>

        </div>
        <div className={comunClass.bottomElement}>
          <Button
            // disabled={anteceOtroC.length === 0 || !anteceOtroValid}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
                dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, anteceOtroC}));              
                dispatch(handleSetStep(19.22))
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

export default DocComplementariosTrayecto;