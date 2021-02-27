import { useState, useEffect, useCallback } from "react";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import PickDate from './../../components/Pickers/Date'
import Time from './../../components/Pickers/Time-ClearIcon'
import yesDisabled from './../../img/yesWork.svg'
import notDisabled from './../../img/notWork.svg'
import yesActive from './../../img/yesActive.svg'
import notActive from './../../img/notActive.svg'
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const FlujoTrabajo = () => {
    const { addmissionForm: { percentage, CamposDocumentos, responsableForm, fechaHoraResponsable }, microsoftReducer: {userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const [ date, setDate ] = useState(fechaHoraResponsable ? moment(fechaHoraResponsable.split(" ")[0], "DD-MM-YYYY").format("DD-MM-YYYY") : null);
    const [ validDate, setValidDate ] = useState(fechaHoraResponsable.length>0 ? true : false);

    const [ hour, setHour ] = useState(fechaHoraResponsable ? moment(fechaHoraResponsable.split(" ")[1], "HH:mm").format("HH:mm") : null);
    const [ validHour, setValidHour ] = useState(fechaHoraResponsable.length>0 ? true : false);

    const [ canContinue, setCanContinue ] = useState(false);

    const updateValid = useCallback(
        (value) => {
            setCanContinue(value)
        },
        [ setCanContinue ]
    )

    useEffect(() => {
        if (!validDate || !validHour){ updateValid(false); return; }
        if (date.includes("_") || date.includes("_")){ updateValid(false); return; }

        let [ dia, mes, anio ] = date.split("-");
        let [ hora, minutos ] = hour.split(":");
        let fecha = new Date(`${+mes}/${dia}/${anio}`);
        let now = new Date();
        if (fecha.getFullYear() < 1900)
            updateValid(false);
        if ((fecha.getFullYear() > now.getFullYear()) ||
        (fecha.getFullYear() === now.getFullYear() && fecha.getMonth() > now.getMonth()) ||
        (fecha.getFullYear() === now.getFullYear() && fecha.getMonth() === now.getMonth() && fecha.getDate() > now.getDate()) ||
        (fecha.getFullYear() === now.getFullYear() && fecha.getMonth() === now.getMonth() && fecha.getDate() === now.getDate() && parseInt(hora) > now.getHours()) ||
        (fecha.getFullYear() === now.getFullYear() && fecha.getMonth() === now.getMonth() && fecha.getDate() === now.getDate() && parseInt(hora) >= now.getHours() && parseInt(minutos) > now.getMinutes())
        ){
            updateValid(false);
            return;
        }
        updateValid(true);
        return;
    }, [ date, validDate, hour, validHour, updateValid ])

    const handleOnClick = (respuesta) => {
        let newValue
        if (respuesta === "Si"){
            newValue = {...CamposDocumentos, TestigoS: "x", TestigoN: ""}
            dispatch(updateForm("testigoTrabajo", true));
            dispatch(updateForm("CamposDocumentos", newValue));
        } else {
            newValue = {...CamposDocumentos, TestigoS: "", TestigoN: "x"}
            dispatch(updateForm("CamposDocumentos", newValue));
            dispatch(updateForm("testigoTrabajo", false));
            dispatch(updateForm("testigos", { nombre: "", cargo: "" }));
        }
        if ((newValue.TestigoS === "x" || newValue.TestigoN === "x") && responsableForm === "No")
            dispatch(handleSetStep(18.01))
    };

    const handleOnClickResponsable = (respuesta) => {
        if (respuesta === "Si"){
            dispatch(updateForm("responsableForm", respuesta));
        } else {
            dispatch(updateForm("fechaHoraResponsable", ``))
            dispatch(updateForm("responsable", { nombre: "", cargo: "" }));
            dispatch(updateForm("responsableForm", respuesta));
            dispatch(handleSetStep(18.01))
        }
    };

    return (
        <div className={comunClass.root}>
        <div className={comunClass.displayDesk}>
            <Header userMsal={ userMsal } />
        </div>
        <div className={comunClass.beginContainerDesk}>
            <Cabecera
            id='FlujoTrabajo-BtnBack'
            dispatch={() => dispatch(handleSetStep(10.1))}
            percentage={percentage}
            />
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>

                    <div className={[ 'row', comunClass.backgroundGrey ].join(' ')}>
                        <div className='col-md-10' style={{textAlign: "left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`}>
                            ¿Alguien fue
                            <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;testigo&nbsp;
                            </Grid>
                            de lo que sucedió?
                        </Grid>
                        </div>
                        <div className='col-md-2' style={{ display: "contents" }}>
                            <img
                            id='FlujoTrabajo-Img1'
                            alt='siTrabajo'
                            src={CamposDocumentos.TestigoS ==="x" ? yesActive : yesDisabled}
                            type='button'
                            style={{ marginRight: "5px" }}
                            onClick={() => handleOnClick("Si")}
                            />

                            <img
                            id='FlujoTrabajo-Img2'
                            alt='noTrabajo'
                            src={CamposDocumentos.TestigoN ==="x" ? notActive :notDisabled}
                            type='button'
                            onClick={() => handleOnClick("No")}
                            />
                        </div>
                    </div>

                    <div className={spaceStyle.space1} />

                    <div className={[ 'row', comunClass.backgroundGrey ].join(' ')}>
                        <div className='col-md-10' style={{textAlign: "left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`}>
                            ¿Se le
                            <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;reportó el accidente a un responsable&nbsp;
                            </Grid>
                            en la empresa?
                        </Grid>
                        </div>
                        <div className='col-md-2' style={{ display: "contents" }}>
                            <img
                            id='FlujoTrabajo-Img3'
                            alt='siTrabajo'
                            src={responsableForm === "Si" ? yesActive : yesDisabled}
                            type='button'
                            style={{ marginRight: "5px" }}
                            onClick={() => handleOnClickResponsable("Si")}
                            />

                            <img
                            id='FlujoTrabajo-Img4'
                            alt='noTrabajo'
                            src={responsableForm === "No" ? notActive :notDisabled}
                            type='button'
                            onClick={() => handleOnClickResponsable("No")}
                            />
                        </div>
                    </div>

                    <div className={spaceStyle.space1} />

                    {responsableForm ==="Si" &&
                    <>
                    <div className='row justify-content-center'>
                        <div className='col-md-5 ' style={{textAlign: "left"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom: '8px', textAlign: "left"}}
                                >
                                        Fecha de aviso
                                </Grid>

                                <PickDate id={"FlujoTrabajo-Datepicker1"} date={date} setDate={setDate}
                                setValidDate={setValidDate}
                                />
                        </div>
                        <div className='col-md-5 ' style={{textAlign: "left"}}>
                                <Grid
                                    className={comunClass.tituloTextBox}
                                    style={{marginBottom: '8px', textAlign: "left"}}
                                >
                                        Hora de aviso
                                </Grid>

                                <Time id={"FlujoTrabajo-Timepicker1"} time={hour} setTime={setHour}
setValidHour={setValidHour}
                                />
                        </div>
                    </div>

                    <div className={spaceStyle.space1} />

                    <div style={{ position: "relative", textAlign: "center" }}>
                        <Button
                            id='FlujoTrabajo-Btn1'
                            variant='contained'
                            className={comunClass.buttonAchs}
                            disabled={!canContinue && responsableForm === "Si"}
                            onClick={() => {
                                dispatch(updateForm("fechaHoraResponsable", `${date} ${hour}`))
                                dispatch(handleSetStep(18.01))
                            }}
                        >
                            Continuar
                        </Button>
                    </div>
                    </>
                    }
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FlujoTrabajo;
