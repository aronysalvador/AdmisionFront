import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import FechaSiniestroDesk from "../../components/FechaSiniestro/FechaSiniestroCalendarDesk";
import HoraSiniestroDesk from "./../../components/HoraSiniestro/HoraSiniestroDesk";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const AtencionPrevia = () => {
  const { microsoftReducer , addmissionForm: {percentage, fechaHoraAtencion, CamposDocumentos } } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { days, month, year, horas, minutos } = fechaHoraAtencion;
  const [OtroRecinto, saveOtroRecinto] = useState(() => {
    return !CamposDocumentos.OtroRecinto ? "" : CamposDocumentos.OtroRecinto;
  });;

  const [CuentaCual, saveCuentaCual] = useState(() => {
    return !CamposDocumentos.CuentaCual ? "" : CamposDocumentos.CuentaCual;
  });;

  const [FechaOtroRe, setFechaOtroRe] = useState({});
  const [HoraOtroRec, setHoraOtroRec] = useState({});
  const [invalidFecha, setInvalidFecha] = useState(true);
  const [invalidHora, setInvalidHora] = useState(true);

  console.log(invalidFecha)
  console.log(invalidHora)

  const minutosArray = [0, 10, 20, 30, 40, 50]

  function setFechaValueSiniestro(value) {
    setFechaOtroRe({ ...value });
  }
  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];  
    setHoraOtroRec({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();
    //========= Fecha =======
    if(FechaOtroRe.year <= 1900 || 
      !(FechaOtroRe.year <= current.getFullYear() && FechaOtroRe.month <= current.getMonth()+1 && FechaOtroRe.days <= current.getDate())
      )
      setInvalidFecha(true)
    else
      setInvalidFecha(false)

    //====== Fin Fecha ======
    //====== Hora =======
    if(
      (HoraOtroRec.horas === -1 || HoraOtroRec.minutos === -1 || HoraOtroRec.minutos === undefined)
      ||
      ((FechaOtroRe.year === current.getFullYear() && FechaOtroRe.month === current.getMonth()+1 && FechaOtroRe.days === current.getDate()) &&
      (
        (HoraOtroRec.horas > current.getHours()) ||
        (HoraOtroRec.horas === current.getHours() && HoraOtroRec.minutos > current.getMinutes())
      ))
    )
    setInvalidHora(true)
  else
    setInvalidHora(false)
  //====== Fin Hora =======
  }, [HoraOtroRec.horas, HoraOtroRec.minutos, FechaOtroRe])

  const clickConfirmar = () => {
    dispatch(updateForm("fechaHoraAtencion", {...FechaOtroRe,...HoraOtroRec}))

    CamposDocumentos.OtroRecinto = OtroRecinto
    CamposDocumentos.OtroRecintoSi="x"
    CamposDocumentos.OtroRecintoNo=""
    CamposDocumentos.FechaOtroRe=FechaOtroRe
    CamposDocumentos.HoraOtroRec=HoraOtroRec

    if(CuentaCual){
      CamposDocumentos.CuentaCual=CuentaCual
      CamposDocumentos.CuentaConSi="x"
      CamposDocumentos.CuentaConNo=""
    }else{
      CamposDocumentos.CuentaCual=""
      CamposDocumentos.CuentaConSi=""
      CamposDocumentos.CuentaConNo="x"
    }

    dispatch(updateForm("CamposDocumentos", CamposDocumentos));
    dispatch(handleSetStep(19.22));    

  };

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
      
      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component="span" className={[comunClass.textPrimaryDesk, comunClass.titleBlack]}>
          ¿Recibió atención previa por otro
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;centro médico o por un profesional de la salud?
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
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.containerTextBox}>          
            <Grid className={[comunClass.tituloTextBox]}>
            Nombre del recinto o profesional
            </Grid>
            <TextField
                id="nombre"
                value={OtroRecinto}
                onChange={(e) => saveOtroRecinto(e.target.value)}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                helperText={(OtroRecinto.length > 0 && OtroRecinto.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(OtroRecinto.length > 0 && OtroRecinto.length < 5)}   
                inputProps={{ maxLength: 100 }}
                fullWidth
                InputProps={{
                    endAdornment: (
                    <InputAdornment  position="end">
                      <IconButton onClick={() => {saveOtroRecinto("");}}>
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                    ),
                }}
            />
          
            <div className={spaceStyle.space1} />
                <div className={comunClass.paddingElement}>
                    <div className={[comunClass.widthDateSex]}>
                      <FechaSiniestroDesk
                        onChange={setFechaValueSiniestro}
                        daysFromState={days}
                        monthFromState={month}
                        yearFromState={year}
                        textLabel={"Fecha de atención"}
                      />
                    </div>
                    <div className={spaceStyle.space1} />
                    <div className={[comunClass.widthDateSex]}>
                      <HoraSiniestroDesk
                          onChange={setHoraValueSiniestro}
                          horasFromState={horas}
                          indiceMinutosFromState={minutosArray.indexOf(minutos)}
                          minutos={minutosArray}
                          textLabel={"Hora de atención"}
                      />
                    </div>
                </div>
            <div className={spaceStyle.space1} />

            <Grid className={[comunClass.tituloTextBox]}>
                Tipo de documentos
            </Grid>
            <TextField
                id="CuentaCual"
                value={CuentaCual}
                onChange={(e) => saveCuentaCual(e.target.value)}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                inputProps={{ maxLength: 100 }}
                fullWidth
                helperText={(CuentaCual.length > 0 && CuentaCual.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(CuentaCual.length > 0 && CuentaCual.length < 5)}   
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => {saveCuentaCual("");}}>
                          <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                ),
                }}
            />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
            disabled={!OtroRecinto}
            onClick={() => clickConfirmar()}
          >
            Confirmar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default AtencionPrevia;
