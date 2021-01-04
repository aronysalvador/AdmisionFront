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
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';
import FechaSintomas from "../../components/FechaSiniestro/FechaSintomasEP";
import FechaSiniestroCalendar from "../../components/FechaSiniestro/FechaSiniestroCalendar";

const CausaEnfermedadProfesional = () => {
  const {
    addmissionForm: { molestiaEP, parteAfectadaEP, FechaSintomasEP, molestiasAnterioresEP, percentage },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const [molestia, setMolestia] = useState(() => {
    return !molestiaEP ? "" : molestiaEP;
  });

  const [parteAfectada, setParteAfectada] = useState(() => {
    return !parteAfectadaEP ? "" : parteAfectadaEP;
  });
  const { days, month, year } = FechaSintomasEP ? FechaSintomasEP : new Date();
  const [fechaSiniestro, setFechaSiniestro] = useState(() => {
    return !FechaSintomasEP ? {} : FechaSintomasEP
  });
  const [invalidFecha, setInvalidFecha] = useState(false);

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();
    //========= Fecha =======
    if(fechaSiniestro.year <= 1900 || 
      !(fechaSiniestro.year <= current.getFullYear() && fechaSiniestro.month <= current.getMonth()+1 )//&& fechaSiniestro.days <= current.getDate()
      ) 
      setInvalidFecha(true)
    else
      setInvalidFecha(false)
    //====== Fin Fecha ======
  }, [fechaSiniestro])

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
                  <InputAdornment position="end">
                    <IconButton onClick={() => { setParteAfectada("") }}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              inputProps={{ maxLength: 200 }}
            />
            
          </div>
          <div className={spaceStyle.space1} />
          <FechaSintomas
            id={"CausaEP-Lbl3"}
            onChange={setFechaValueSiniestro}
            daysFromState={days}
            monthFromState={month}
            yearFromState={year}
            textoPrimario="Ingresa la fecha de inicio de sintomas"
          />
          <div style={{display:'none'}}>
            <FechaSiniestroCalendar
              // id={"CausaEP-Label3"}
              onChange={setFechaValueSiniestro}
              daysFromState={days}
              monthFromState={month}
              yearFromState={year}
            />
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
            disabled={molestia?.length <= 4 || parteAfectada?.length <= 3 || invalidFecha}
            onClick={() => {
              dispatch(updateForm("molestiaEP", molestia));
              dispatch(updateForm("parteAfectadaEP", parteAfectada));
              dispatch(updateForm("FechaSintomasEP", { ...fechaSiniestro }));
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