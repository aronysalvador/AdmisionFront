import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Date from './../../components/Pickers/Date'
import Time from './../../components/Pickers/Time-ClearIcon'
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const AtencionPrevia = () => {
  const { microsoftReducer, addmissionForm: {percentage, fechaHoraAtencion, CamposDocumentos } } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [ OtroRecinto, saveOtroRecinto ] = useState(!CamposDocumentos.OtroRecinto ? "" : CamposDocumentos.OtroRecinto);
  const [ CuentaCual, saveCuentaCual ] = useState(!CamposDocumentos.CuentaCual ? "" : CamposDocumentos.CuentaCual);

  const formatDate = (fecha) => {
    let x = fecha.split("-")
    let newfecha = `${x[2]}-${x[1]}-${x[0]}`

    return moment(newfecha, "DD-MM-YYYY").format("DD-MM-YYYY")
  }

  const [ FechaOtroRe, setFechaOtroRe ] = useState(fechaHoraAtencion ? formatDate(fechaHoraAtencion.split(" ")[0]) : null);
  const [ validDate, setValidDate ] = useState(fechaHoraAtencion.length>0);

  const [ HoraOtroRec, setHoraOtroRec ] = useState(fechaHoraAtencion ? moment(fechaHoraAtencion.split(" ")[1], "HH:mm").format("HH:mm") : null);
  const [ validHour, setValidHour ] = useState(fechaHoraAtencion.length>0);

  const clickConfirmar = () => {
    let fecha = ""
    if (validDate){
      let x = FechaOtroRe.split("-")
      fecha = `${x[2]}-${x[1]}-${x[0]}`
    }

    dispatch(updateForm("fechaHoraAtencion", validDate && validHour ? `${fecha} ${HoraOtroRec}` : ""))

    CamposDocumentos.OtroRecinto = OtroRecinto
    CamposDocumentos.OtroRecintoSi="x"
    CamposDocumentos.OtroRecintoNo=""
    CamposDocumentos.FechaOtroRe=validDate ? `${fecha}` : ""
    CamposDocumentos.HoraOtroRec=validHour ? `${HoraOtroRec}` : ""

    if (CuentaCual){
      CamposDocumentos.CuentaCual=CuentaCual
      CamposDocumentos.CuentaConSi="x"
      CamposDocumentos.CuentaConNo=""
    } else {
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
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id='AtencionPrevia-BtnBack'
          dispatch={() => dispatch(handleSetStep(19.201))}
          percentage={percentage}
        />
      </div>

      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component='span' className={[ comunClass.textPrimaryDesk, comunClass.titleBlack ]}>
          ¿Recibió atención previa por otro
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            &nbsp;centro médico o por un profesional de la salud?
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk} style={{maxWidth: "inherit"}}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.containerTextBox}>
            <Grid className={[ comunClass.tituloTextBox ]}>
            Nombre del recinto o profesional
            </Grid>
            <TextField
                id='AtencionPrevia-nombre'
                value={OtroRecinto}
                onChange={(e) => saveOtroRecinto(e.target.value)}
                margin='dense'
                variant='outlined'
                autoComplete='off'
                type='text'
                helperText={(OtroRecinto.length > 0 && OtroRecinto.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(OtroRecinto.length > 0 && OtroRecinto.length < 5)}
                inputProps={{ maxLength: 100 }}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <ClearIcon id='AtencionPrevia-ClearIcon1' onClick={() => { saveOtroRecinto(""); }} />
                    )
                }}
            />

            <div className={spaceStyle.space1} />
                <div className={comunClass.paddingElement}>
                    <div>
                      <Grid className={[ comunClass.tituloTextBox ]}>
                        Fecha de accidente
                      </Grid>
                      <Date date={FechaOtroRe} setDate={setFechaOtroRe} id='AtencionPrevia-Datepicker1'
setValidDate={setValidDate}
                      />
                    </div>

                    <div style={{marginLeft: '0.5em'}}>
                      <Grid className={[ comunClass.tituloTextBox ]}>
                        Hora de accidente
                      </Grid>
                      <Time id={"AtencionPrevia-TimePicker2"} time={HoraOtroRec} setTime={setHoraOtroRec}
setValidHour={setValidHour}
                      />
                    </div>

                </div>
            <div className={spaceStyle.space1} />

            <Grid className={[ comunClass.tituloTextBox ]}>
                Tipo de documentos
            </Grid>
            <TextField
                id='AtencionPrevia-CuentaCual'
                value={CuentaCual}
                onChange={(e) => saveCuentaCual(e.target.value)}
                margin='dense'
                variant='outlined'
                autoComplete='off'
                type='text'
                inputProps={{ maxLength: 100 }}
                fullWidth
                helperText={(CuentaCual.length > 0 && CuentaCual.length < 5) && "Se necesita al menos 5 caracteres"}
                error={(CuentaCual.length > 0 && CuentaCual.length < 5)}
                InputProps={{
                endAdornment: (
                          <ClearIcon id='AtencionPrevia-ClearIcon2' onClick={() => { saveCuentaCual(""); }} />
                )
                }}
            />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id='AtencionPrevia-Btn1'
            className={comunClass.buttonAchs}
            variant='contained'
            type='submit'
            disabled={OtroRecinto.length<5 || !validDate || !validHour}
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
