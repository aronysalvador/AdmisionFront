import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, Typography, withStyles, Checkbox } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Date from './../../components/Pickers/Date'
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const CausaEnfermedadProfesional = () => {
  const {
    addmissionForm: { molestiaEP, parteAfectadaEP, FechaSintomasEP, molestiasAnterioresEP, percentage },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const formatDate = (fecha) => {
    let x = fecha.split(".")
    let newfecha = `${x[2]}-${x[1]}-${x[0]}`
    return moment(newfecha, "DD-MM-YYYY").format("DD-MM-YYYY")
  }

  const [molestia, setMolestia] = useState(() => {
    return !molestiaEP ? "" : molestiaEP;
  });

  const [parteAfectada, setParteAfectada] = useState(() => {
    return !parteAfectadaEP ? "" : parteAfectadaEP;
  });
  
  const [fechaSiniestro, setFechaSiniestro] = useState(!FechaSintomasEP ? "" : formatDate(FechaSintomasEP));
  const [validFecha, setValidFecha] = useState(FechaSintomasEP.length>0 ? true :false);


  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const welcomeStyle = getWelcomeStyle();

  const [stateCheckbox, setStateCheckbox] = useState(() => {
    return !molestiasAnterioresEP ? false : (molestiasAnterioresEP === "si" ? true : false)
  });

  const handleCheckBoxChange = (event) => {
    setStateCheckbox( event.target.checked );
  };

  var respMolestias = stateCheckbox ? "si" : "no" ;

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
          id={"CausaEP-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.7))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid  className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Indícanos la causa de la
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;enfermedad profesional
          </Grid>                    
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
          <div>
            <Typography className={comunClass.tituloTextBox} for={"CausaEP-Lbl1"}>
              Describe las molestias y síntomas
            </Typography>
            <TextField
              id={"CausaEP-Lbl1"}
              value={molestia}
              placeholder={"Ejemplo: Dolor de garganta, dolor de espalda, fiebre, tos, dolor de estomago"}
              onChange={(e) => setMolestia(Format.caracteresInvalidos(e.target.value))}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              type="text"
              fullWidth
              rows={2}
              multiline
              inputProps={{ maxLength: 400 }}
            />
            <label className={comunClass.pullRight}>{molestia.length}/400</label>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Typography className={comunClass.tituloTextBox} for={"CausaEP-Lbl2"}>
              Ingresa la parte del cuerpo afectada
            </Typography>
            <TextField
              id={"CausaEP-Lbl2"}
              autoComplete
              value={parteAfectada}
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              onChange={(e) => setParteAfectada (Format.caracteresInvalidos(e.target.value)) }
              InputProps={{
                endAdornment: (
                      <ClearIcon onClick={() => { setParteAfectada("") }} />
                )
              }}
              inputProps={{ maxLength: 200 }}
            />
            
          </div>
          <div className={spaceStyle.space1} />

          <div>
            <Typography className={comunClass.tituloTextBox} for={"CausaEP-Lbl2"}>
              Ingresa la fecha de inicio de sintomas
            </Typography>
            <Date date={fechaSiniestro} setDate={setFechaSiniestro} id="CausaEP-Datepicker1" setValidDate={setValidFecha} />
          </div>

          <div className={spaceStyle.space1} />
          <Typography className={welcomeStyle.switchText} style={{}} for={"CausaEP-Chk1"}>
            <Grid component="span">
              <BlueCheckbox id={"CausaEP-Chk1"} checked={stateCheckbox} onChange={handleCheckBoxChange} />
            </Grid>
              Existen molestias anteriores a la fecha indicada
          </Typography>
        </div>

        <div className={comunClass.bottomElement} style={{padding: "10px 0"}}>
          <Button
            id={"CausaEP-Btn1"}
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={molestia?.length <= 4 || parteAfectada?.length <= 3 || !validFecha}
            onClick={() => {
              dispatch(updateForm("molestiaEP", molestia));
              dispatch(updateForm("parteAfectadaEP", parteAfectada));
              var fecha = ""
              if(validFecha){
                let x = fechaSiniestro.split("-")
                fecha = `${x[2]}.${x[1]}.${x[0]}`
              }
              dispatch(updateForm("FechaSintomasEP", fecha));
              dispatch(updateForm("molestiasAnterioresEP", respMolestias));
              dispatch(handleSetStep(6.05)); 
            }}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div> 
    </div>
  );
};

export default CausaEnfermedadProfesional;