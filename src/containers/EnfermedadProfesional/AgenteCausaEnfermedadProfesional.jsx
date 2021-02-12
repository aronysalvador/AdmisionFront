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
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';
import AutoComplete from "@material-ui/lab/Autocomplete";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const AgenteCausaEnfermedadProfesional = () => {
  const {
    addmissionForm: { AgenteCausaEP, TrabajoMolestiasEP, FechaExposicionAgenteEP, mismasMolestiasCompañerosEP, percentage },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const formatDate = (fecha) => {
    let newfecha = fecha.replace(/[.]/g, '-')
    return moment(newfecha, "DD-MM-YYYY").format("DD-MM-YYYY")
  }

  const [agenteCausa, setAgenteCausa] = useState(() => {
    return !AgenteCausaEP ? {} : AgenteCausaEP;
  });

  const { data: sugerenciasAgenteCausa } = useSelector( 
    (state) => state.agenteCausaEnfermedadForm, shallowEqual ); 

  const [molestia, setMolestia] = useState(() => {
    return !TrabajoMolestiasEP ? "" : TrabajoMolestiasEP;
  });

  const [fechaSiniestro, setFechaSiniestro] = useState(!FechaExposicionAgenteEP ? "" : formatDate(FechaExposicionAgenteEP));
  const [validFecha, setValidFecha] = useState(!FechaExposicionAgenteEP ? false : true);

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
          id={"AgenteCausaEP-BtnBack"}
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
              id={"AgenteCausaEP-Lbl1"}
              value={agenteCausa}
              onChange={(event, value) => {
                setAgenteCausa(value);
              }}
              options={sugerenciasAgenteCausa} 
              getOptionLabel={(option) =>  option.nombre }
              getOptionSelected= {(
                option,
                value,
              ) => value.value === option.value}
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
              id={"AgenteCausaEP-Lbl2"}
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

          <div>
            <Typography className={comunClass.tituloTextBox} style={{marginBottom: "5px"}}>
              Ingresa la fecha de exposición al agente
            </Typography>
            <Date date={fechaSiniestro} setDate={setFechaSiniestro} id="AgenteCausaEP-Datepicker1" setValidDate={setValidFecha} />
          </div>

          <div className={spaceStyle.space1} />
          <Typography className={welcomeStyle.switchText} style={{}}>
            <Grid component="span">
              <BlueCheckbox id={"AgenteCausaEP-Chk1"} checked={stateCheckbox} onChange={handleCheckBoxChange} />
            </Grid>
            Existen compañeros de trabajo con las mismas molestias
          </Typography>
        </div>

        <div className={comunClass.bottomElement} style={{padding: "10px 0"}}>
          <Button
            id={"AgenteCausaEP-Btn1"}
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={agenteCausa?.length <= 4 || molestia?.length <= 4 || !validFecha}
            onClick={() => {
              dispatch(updateForm("AgenteCausaEP", agenteCausa));
              dispatch(updateForm("TrabajoMolestiasEP", molestia));
              dispatch(updateForm("FechaExposicionAgenteEP", validFecha ? fechaSiniestro.replace(/[-]/g, '.') : ""));
              dispatch(updateForm("mismasMolestiasCompañerosEP", respMolestias));
              dispatch(handleSetStep(18.01)); //18.1 
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