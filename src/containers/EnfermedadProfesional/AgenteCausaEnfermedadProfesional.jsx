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
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';
import FechaSintomas from "../../components/FechaSiniestro/FechaSintomasEP";
import AutoComplete from "@material-ui/lab/Autocomplete";
import FechaSiniestroCalendar from "../../components/FechaSiniestro/FechaSiniestroCalendar";

const AgenteCausaEnfermedadProfesional = () => {
  const {
    addmissionForm: { AgenteCausaEP, TrabajoMolestiasEP, FechaExposicionAgenteEP, mismasMolestiasCompañerosEP, percentage },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const [agenteCausa, setAgenteCausa] = useState(() => {
    return !AgenteCausaEP ? {} : AgenteCausaEP;
  });

  const { data: sugerenciasAgenteCausa } = useSelector( 
    (state) => state.agenteCausaEnfermedadForm, shallowEqual ); 

  const [molestia, setMolestia] = useState(() => {
    return !TrabajoMolestiasEP ? "" : TrabajoMolestiasEP;
  });

  const { days, month, year } = FechaExposicionAgenteEP ? FechaExposicionAgenteEP : new Date();
  const [fechaSiniestro, setFechaSiniestro] = useState(() => {
    return !FechaExposicionAgenteEP ? {} : FechaExposicionAgenteEP
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
    return !mismasMolestiasCompañerosEP ? false : (mismasMolestiasCompañerosEP === "si" ? true : false)
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
          dispatch={() => dispatch(handleSetStep(6.04))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid  className={[comunClass.titleBlack, comunClass.textPrimaryDesk]} style={{margin: '-3px'}}>
          ¿Qué cosas o agentes del trabajo cree Ud. 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;que le causan estas molestias
          </Grid> 
          ?                   
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
            <Typography className={comunClass.tituloTextBox}>
              Ingrese agente que causa la molestia
            </Typography>

            <AutoComplete
              value={agenteCausa}
              onChange={(event, value) => {
                setAgenteCausa(value);
              }}
              options={sugerenciasAgenteCausa} 
              getOptionLabel={(option) =>  option.nombre }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"  
                  size="small"              
                  InputProps={{
                    ...params.InputProps,
                    style: { marginTop: "7px" },
                  }}
                />
              )}
            /> 
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Trabajo que realizaba al momento de las molestias
            </Typography>
            <TextField
              id="nombre"
              value={molestia}
              placeholder={"Ejemplo: aire acondicionado, silla de escritorio"}
              onChange={(e) => setMolestia(Format.caracteresInvalidos(e.target.value))}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              type="text"
              fullWidth
              rows={2}
              multiline
              inputProps={{ maxLength: 200 }}
            />
            <label className={comunClass.pullRight}>{molestia.length}/200</label>
          </div>
          <div className={spaceStyle.space1} />
          <FechaSintomas
            onChange={setFechaValueSiniestro}
            daysFromState={days}
            monthFromState={month}
            yearFromState={year}
            textoPrimario="Ingresa la fecha de exposición al agente"
          />
          <div style={{display:'none'}}>
            <FechaSiniestroCalendar
              onChange={setFechaValueSiniestro}
              daysFromState={days}
              monthFromState={month}
              yearFromState={year}
            />
          </div>
          <div className={spaceStyle.space1} />
          <Typography className={welcomeStyle.switchText} style={{}}>
            <Grid component="span">
              <BlueCheckbox checked={stateCheckbox} onChange={handleCheckBoxChange} />
            </Grid>
            Existen compañeros de trabajo con las mismas molestias
          </Typography>
        </div>

        <div className={comunClass.bottomElement} style={{padding: "10px 0"}}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={agenteCausa?.length <= 4 || molestia?.length <= 4 || invalidFecha}
            onClick={() => {
              console.log(agenteCausa.id)
              dispatch(updateForm("AgenteCausaEP", agenteCausa.id));
              dispatch(updateForm("TrabajoMolestiasEP", molestia));
              dispatch(updateForm("FechaExposicionAgenteEP", { ...fechaSiniestro }));
              dispatch(updateForm("mismasMolestiasCompañerosEP", respMolestias));
              dispatch(handleSetStep(18.1)); 
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

export default AgenteCausaEnfermedadProfesional;