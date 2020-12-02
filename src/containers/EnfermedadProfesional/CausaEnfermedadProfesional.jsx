import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
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

const CausaEnfermedadProfesional = () => {
  const {
    addmissionForm: { molestiaEP, parteAfectadaEP, FechaSintomasEP, percentage },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const [molestia, setMolestia] = useState(() => {
    return !molestiaEP ? "" : molestiaEP;
  });

  const [parteAfectada, setParteAfectada] = useState(() => {
    return !parteAfectadaEP ? "" : parteAfectadaEP;
  });
  const { days, month, year } = new Date();//FechaSintomasEP;
  const [fechaSiniestro, setFechaSiniestro] = useState({});
  const [invalidFecha, setInvalidFecha] = useState(true);

  function setFechaValueSiniestro(value) {
    setFechaSiniestro({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();
    //========= Fecha =======
    if(fechaSiniestro.year <= 1900 || 
      !(fechaSiniestro.year <= current.getFullYear() && fechaSiniestro.month <= current.getMonth()+1 && fechaSiniestro.days <= current.getDate())
      )
      setInvalidFecha(true)
    else
      setInvalidFecha(false)
    //====== Fin Fecha ======
  }, [fechaSiniestro])

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

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
            <Typography className={comunClass.tituloTextBox}>
              Describe las molestias y síntomas
            </Typography>
          </div>
          <div>
            <TextField
              id="nombre"
              value={molestia}
              onChange={(e) => setMolestia(Format.caracteresInvalidos(e.target.value))}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              type="text"
              fullWidth
              InputProps={{
                maxLength: 400,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => { setMolestia("") }}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <label className={comunClass.pullRight}>{molestia.length}/400</label>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Ingresa la parte del cuerpo afectada
            </Typography>
            <TextField
              autoComplete
              // helperText={!parteAfectada && "Debes ingresar al menos una parte del cuerpo afectada"}
              // error={!parteAfectada}
              value={parteAfectada}
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              onChange={(e) => setParteAfectada (Format.caracteresInvalidos(e.target.value)) }
              InputProps={{
                maxLength: 200,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => { setParteAfectada("") }}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className={spaceStyle.space1} />
          <FechaSintomas
              onChange={setFechaValueSiniestro}
              daysFromState={days}
              monthFromState={month}
              yearFromState={year}
            />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={molestia?.length <= 3 || parteAfectada?.length <= 3 || invalidFecha}
            onClick={() => {
              dispatch(updateForm("molestiaEP", molestia));
              dispatch(updateForm("parteAfectadaEP", parteAfectada));
              dispatch(updateForm("FechaSintomasEP", { ...fechaSiniestro }));
              dispatch(handleSetStep(18.1)); // DEBE DIRIGIR A LA SGTE DE EP - ARREGLAR BACK AFP 18.1
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

export default CausaEnfermedadProfesional;