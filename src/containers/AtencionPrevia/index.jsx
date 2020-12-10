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
  const { microsoftReducer , addmissionForm: {percentage,fechaHoraAtencion, CamposDocumentos } } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { days, month, year, horas, minutos } = fechaHoraAtencion;
  const [nombreAtencion, saveNombreAtencion] = useState(() => {
    return !CamposDocumentos.nombreAtencion ? "" : CamposDocumentos.nombreAtencion;
  });;

  const [tipoDocumento, saveTipoDocumento] = useState(() => {
    return !CamposDocumentos.tipoDocumento ? "" : CamposDocumentos.tipoDocumento;
  });;

  const [fechaAtencion, setFechaAtencion] = useState({});
  const [horaAtencion, setHoraAtencion] = useState({});
  const [invalidFecha, setInvalidFecha] = useState(true);
  const [invalidHora, setInvalidHora] = useState(true);

  const minutosArray = [0, 10, 20, 30, 40, 50]

  function setFechaValueSiniestro(value) {
    setFechaAtencion({ ...value });
  }
  function setHoraValueSiniestro(value) {
    value.minutos = minutosArray[value.indiceMinutos];  
    setHoraAtencion({ ...value });
  }

  React.useEffect(() => {
    let current = new Date();
    //========= Fecha =======
    if(fechaAtencion.year <= 1900 || 
      !(fechaAtencion.year <= current.getFullYear() && fechaAtencion.month <= current.getMonth()+1 && fechaAtencion.days <= current.getDate())
      )
      setInvalidFecha(true)
    else
      setInvalidFecha(false)

    //====== Fin Fecha ======
    //====== Hora =======
    if(
      (horaAtencion.horas === -1 || horaAtencion.minutos === -1 || horaAtencion.minutos === undefined)
      ||
      ((fechaAtencion.year === current.getFullYear() && fechaAtencion.month === current.getMonth()+1 && fechaAtencion.days === current.getDate()) &&
      (
        (horaAtencion.horas > current.getHours()) ||
        (horaAtencion.horas === current.getHours() && horaAtencion.minutos > current.getMinutes())
      ))
    )
    setInvalidHora(true)
  else
    setInvalidHora(false)
  //====== Fin Hora =======
  }, [horaAtencion.horas, horaAtencion.minutos, fechaAtencion])

  const clickConfirmar = () => {
    dispatch(updateForm("fechaHoraAtencion", {...fechaAtencion,...horaAtencion}))
    dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, nombreAtencion , fechaAtencion, horaAtencion, tipoDocumento}));
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
                value={nombreAtencion}
                onChange={(e) => saveNombreAtencion(e.target.value)}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                helperText={(nombreAtencion.length > 0 && nombreAtencion.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(nombreAtencion.length > 0 && nombreAtencion.length < 5)}   
                inputProps={{ maxLength: 100 }}
                fullWidth
                InputProps={{
                    endAdornment: (
                    <InputAdornment  position="end">
                      <IconButton onClick={() => {saveNombreAtencion("");}}>
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
                id="tipoDocumento"
                value={tipoDocumento}
                onChange={(e) => saveTipoDocumento(e.target.value)}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                inputProps={{ maxLength: 100 }}
                fullWidth
                helperText={(tipoDocumento.length > 0 && tipoDocumento.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(tipoDocumento.length > 0 && tipoDocumento.length < 5)}   
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => {saveTipoDocumento("");}}>
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
            disabled={!nombreAtencion ||invalidFecha ||invalidHora}
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
