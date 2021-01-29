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
    addmissionForm: { percentage, CamposDocumentos}, //  addmissionForm:{ CamposDocumentos }  
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
    antecePartP: !CamposDocumentos.antecePartP ? false : CamposDocumentos.antecePartP,
    anteceConst: !CamposDocumentos.anteceConst ? false : CamposDocumentos.anteceConst,
    anteceVideS: !CamposDocumentos.anteceVideS ? false : CamposDocumentos.anteceVideS,
    anteceComSe: !CamposDocumentos.anteceComSe ? false : CamposDocumentos.anteceComSe,
    anteceOtro: !CamposDocumentos.anteceOtro ? false : CamposDocumentos.anteceOtro,
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
  
  // useEffect(()=>{
  //   // console.log(state)
  // },[state])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id="DocComplementariosTrayecto-BtnBack"
          dispatch={() => dispatch(handleSetStep(19.23))}
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
        <div className={comunClass.containerTextBox} style={{width:'100%'}}>
          <FormGroup row>
          <div className={comunClass.deskFlex}>
            <div className={state.antecePartP === true ? comunClass.roundedBlue : comunClass.roundedNormal} style={{minWidth: "315px", width:"100%"}}>
              <div className={comunClass.containerOpctionCompl}>
                <FormControlLabel
                  control={<BlueCheckbox id="DocComplementariosTrayecto-Check1" checked={state.antecePartP} onChange={handleChange} name="antecePartP" />}
                  label="Parte policial"
                />
              </div>
            </div>
            <div className={spaceStyle.spaceMin1} />
            <div className={state.anteceConst === true ? comunClass.roundedBlue : comunClass.roundedNormal} style={{minWidth: "315px", width:"100%"}}>
              <div className={comunClass.containerOpctionCompl}>
                <FormControlLabel
                  control={<BlueCheckbox id="DocComplementariosTrayecto-Check2"  checked={state.anteceConst} onChange={handleChange} name="anteceConst" />}
                  label="Constancia ante carabineros"
                />
              </div>
            </div>
          </div>
          <div className={spaceStyle.spaceMin1} />
          <div className={comunClass.deskFlex}>
            <div className={state.anteceVideS === true ? comunClass.roundedBlue : comunClass.roundedNormal} style={{minWidth: "315px", width:"100%"}}>
              <div className={comunClass.containerOpctionCompl}>
                <FormControlLabel 
                  control={<BlueCheckbox id="DocComplementariosTrayecto-Check3"  checked={state.anteceVideS} onChange={handleChange} name="anteceVideS" />} 
                  label="Video de cámaras de seguridad" 
                />
              </div>
            </div>
            <div className={spaceStyle.spaceMin1} />
            <div className={state.anteceComSe === true ? comunClass.roundedBlue : comunClass.roundedNormal} style={{minWidth: "315px", width:"100%"}}>
              <div className={comunClass.containerOpctionCompl}>
                <FormControlLabel
                  control={<BlueCheckbox id="DocComplementariosTrayecto-Check4"  checked={state.anteceComSe} onChange={handleChange} name="anteceComSe" />}
                  label="Denuncia en compañía de seguros"
                />
              </div>
            </div>
          </div>
          <div className={spaceStyle.spaceMin1} />
          <div className={state.anteceOtro === true ? comunClass.roundedBlue : comunClass.roundedNormal} style={{minWidth: "315px", width:"100%"}}>
            <div className={comunClass.containerOpctionCompl}>
              <FormControlLabel
                control={<BlueCheckbox id="DocComplementariosTrayecto-Check5"  checked={state.anteceOtro} onChange={handleChange} name="anteceOtro" className={comunClass.txtRadios} />}
                label="Otro"
              />
            </div>
            <div className={comunClass.widthOtro} style={{ padding: '5px 10px 5px' }}>
              <TextField
                id="DocComplementariosTrayecto-Input1" 
                style={{ background: '#ffff', borderRadius: '8px'}}
                disabled={state.anteceOtro === false}
                helperText={
                  !anteceOtroValid && "Debes ingresar al menos 5 caracteres"
                }
                error={!anteceOtroValid}
                value={anteceOtroC}
                variant="outlined"
                size="small"
                margin="dense"
                required
                autoComplete="off"
                fullWidth
                onChange={(e) => {
                  let texto = Format.caracteresInvalidos(e.target.value);
                  setAnteceOtroValid(texto.length > 0);
                  setAnteceOtroC(texto);
                }}
                inputProps={{ maxLength: 100, minLength: 5}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                          id="DocComplementariosTrayecto-ClearIcon1" 
                          onClick={() => { setAnteceOtroC("") }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          </FormGroup>

        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id="DocComplementariosTrayecto-Btn1"
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={state.anteceOtro && anteceOtroC.length <= 4}
            onClick={() => {
              CamposDocumentos.anteceOtroC = ""

              if ( state.antecePartP ) { CamposDocumentos.antecePartP = "x" } else { CamposDocumentos.antecePartP = "" }
              if ( state.anteceConst ) { CamposDocumentos.anteceConst = "x" } else { CamposDocumentos.anteceConst = "" }
              if ( state.anteceVideS ) { CamposDocumentos.anteceVideS = "x" } else { CamposDocumentos.anteceVideS = "" }
              if ( state.anteceComSe ) { CamposDocumentos.anteceComSe = "x" } else { CamposDocumentos.anteceComSe = "" }
              if ( state.anteceOtro ) { CamposDocumentos.anteceOtro = "x"; CamposDocumentos.anteceOtroC = anteceOtroC } else { CamposDocumentos.anteceOtro = "" }

              if(!state.antecePartP && !state.anteceConst && !state.anteceVideS && !state.anteceComSe  && !state.anteceOtro){
                CamposDocumentos.anteceNocuenta = "x"
              }
              else {CamposDocumentos.anteceNocuenta = ""}

              dispatch(updateForm("CamposDocumentos", CamposDocumentos));              
              dispatch(handleSetStep(19.25))
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