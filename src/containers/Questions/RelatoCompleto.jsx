import React, { useState } from "react";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, withStyles } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { Format } from "../../helpers/strings";
import yesDisabled from './../../img/yesWork.svg'
import notDisabled from './../../img/notWork.svg'
import yesActive from './../../img/yesActive.svg'
import notActive from './../../img/notActive.svg'

const BlueCheckbox = withStyles({
    root: {
      '&$checked': {
        color: '#00B2A9'
      }
    },
    checked: {}
  })((props) => <Checkbox color='default' {...props} />);

const RelatoCompleto = () => {
    const { addmissionForm: { percentage, lugarAccidente, descripcionAccidente, objetoAccidente, coberturaSoap, desarrollarTrabajoHabitual, tipoSiniestro }, microsoftReducer: {userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const welcomeStyle = getWelcomeStyle();

    const [ text1, setText1 ] = useState(() => {
        return !lugarAccidente ? "Al momento del accidente estaba " : lugarAccidente;
    });

    const [ text2, setText2 ] = useState(() => {
        return !descripcionAccidente ? "Lo que ocurrio fue que " : descripcionAccidente;
    });

    const [ text3, setText3 ] = useState(() => {
        return !objetoAccidente ? "El accidente ocurrio con " : objetoAccidente;
    });

    const [ stateCheckbox, setStateCheckbox ] = useState(() => {
        return coberturaSoap === "si"
      });

    const onChangeValue1 = (e) => {
        if (e.target.value.search("Al momento del accidente estaba") >= 0)
            setText1(Format.caracteresInvalidos(e.target.value));
        else
            setText1(Format.caracteresInvalidos(`Al momento del accidente estaba ${e.target.value.slice(0, 167)}`));
    };

    const onChangeValue2 = (e) => {
         if (e.target.value.search("Lo que ocurrio fue que") >= 0)
            setText2(Format.caracteresInvalidos(e.target.value));
        else
            setText2(Format.caracteresInvalidos(`Lo que ocurrio fue que ${e.target.value.slice(0, 176)}`));
    };

    const onChangeValue3 = (e) => {
        if (e.target.value.search("El accidente ocurrio con") >= 0)
            setText3(Format.caracteresInvalidos(e.target.value));
        else
            setText3(Format.caracteresInvalidos(`El accidente ocurrio con ${e.target.value.slice(0, 174)}`));
    };

    const handleCheckBoxChange = (event) => {
        setStateCheckbox(event.target.checked);
    };

    let respSoap = stateCheckbox ? "si" : "no";

    const handleOnClick = (respuesta) => {
        dispatch(updateForm("desarrollarTrabajoHabitual", respuesta));
    };

    const respuestaOriginal = objetoAccidente;
    const saveAnswer = () => {
        dispatch(updateForm("lugarAccidente", text1));
        dispatch(updateForm("descripcionAccidente", text2));
        dispatch(updateForm("objetoAccidente", text3));
        dispatch(updateForm("coberturaSoap", respSoap));
        dispatch(handleSetStep(8.1));
        if (respuestaOriginal !== text3)
            dispatch(updateForm("volverAConcatenar", true));
    };

    return (
        <div className={comunClass.root}>
        <div className={comunClass.displayDesk}>
            <Header userMsal={ userMsal } />
        </div>
        <div className={comunClass.beginContainerDesk}>
            <Cabecera
            id={"RelatoCompleto-BtnBack"}
            dispatch={() => dispatch(handleSetStep("x", 6.06))}
            percentage={percentage}
            />
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>
                    <div className={[ 'row', comunClass.backgroundGrey ].join(' ')}>

                    <Grid className={`${comunClass.textPrimaryRelato}`}>
                        ¿Qué estaba haciendo
                        <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                            &nbsp; justo antes del accidente?
                        </Grid>
                    </Grid>
                    <TextField
                        id={"RelatoCompleto-Lbl1"}
                        value={text1}
                        margin='dense'
                        variant='outlined'
                        fullWidth
                        autoComplete='off'
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={(text1.length - 32 < 5 && text1.length - 32 > 0) &&"Se necesita al menos 5 caracteres"}
                        error={text1.length - 32 < 5 && text1.length - 32 > 0}
                        onChange={text1.length >= 32 ? onChangeValue1 : setText1("Al momento del accidente estaba ")}
                        // defaultValue="Al momento del accidente estaba "
                    />
                    <label className={comunClass.pullRight}>{text1.length }/200</label>

                    <Grid className={`${comunClass.textPrimaryRelato}`}>
                        ¿Qué
                        <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                            &nbsp; ocurrió y qué lesión &nbsp;
                        </Grid>
                        presenta?
                    </Grid>
                    <TextField
                        id={"RelatoCompleto-Lbl2"}
                        value={text2}
                        margin='dense'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={(text2.length - 23 < 5 && text2.length - 23 > 0)&&"Se necesita al menos 5 caracteres"}
                        error={text2.length - 23 < 5 && text2.length - 23 > 0}
                        onChange={text2.length >= 23 ? onChangeValue2 : setText2("Lo que ocurrio fue que ")}
                        // defaultValue={"Lo que ocurrio fue que "}
                    />
                    <label className={comunClass.pullRight}>{text2.length}/200</label>

                    <Grid className={`${comunClass.textPrimaryRelato}`}>
                        ¿Con
                        <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                            &nbsp; qué ocurrió el acciendente
                        </Grid>
                        ?
                    </Grid>
                    <TextField
                        id={"RelatoCompleto-Lbl3"}
                        value={text3}
                        margin='dense'
                        variant='outlined'
                        fullWidth
                        autoComplete='off'
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={(text3.length - 25 < 5 && text3.length - 25 > 0) &&"Se necesita al menos 5 caracteres"}
                        error={text3.length - 25 < 5 && text3.length - 25 > 0}
                        onChange={text3.length >= 25 ? onChangeValue3 : setText3("El accidente ocurrio con ")}
                        // defaultValue={"El accidente ocurrio con "}
                    />
                    <label className={comunClass.pullRight}>{text3.length}/200</label>

                    </div>
                    <div className={spaceStyle.space1} />

                    {tipoSiniestro.Id === 1 &&
                        <div className={[ 'row', comunClass.backgroundGrey ].join(' ')}>
                        <div className='col-md-10' style={{textAlign: "left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`}>
                            Al momento del accidente, ¿desarrollaba su
                            <Grid component='span' className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;trabajo habitual
                            </Grid>
                            ?
                        </Grid>
                        </div>
                        <div className='col-md-2' style={{ display: "contents" }}>
                            <img
                                id={"RelatoCompleto-BtnSi"}
                                alt='siTrabajo'
                                src={desarrollarTrabajoHabitual ==="Si" ? yesActive : yesDisabled}
                                type='button'
                                style={{ marginRight: "5px" }}
                                onClick={() => handleOnClick("Si")}
                            />

                            <img
                                id={"RelatoCompleto-BtnNo"}
                                alt='noTrabajo'
                                src={desarrollarTrabajoHabitual ==="No" ? notActive :notDisabled}
                                type='button'
                                onClick={() => handleOnClick("No")}
                            />
                        </div>
                        </div>
                    }
                    <div className='row'>
                        <Typography className={welcomeStyle.switchText}>
                            <Grid component='span'>
                                <BlueCheckbox id={"RelatoCompleto-Chk1"} checked={stateCheckbox} onChange={handleCheckBoxChange} />
                            </Grid>
                            Corresponde a cobertura &nbsp;<b>SOAP</b>
                        </Typography>
                    </div>
                    <div style={{ position: "relative", textAlign: "center" }}>
                    <Button
                        id={"RelatoCompleto-Btn1"}
                        className={comunClass.buttonAchs}
                        variant='contained'
                        disabled={tipoSiniestro.Id === 1 ? !(text1.length - 32 > 4) || !(text2.length - 23 > 4) || !(text3.length - 25 > 4) || !(desarrollarTrabajoHabitual) : (!(text1.length - 32 > 4) || !(text2.length - 23 > 4) || !(text3.length - 25 > 4))}
                        onClick={() => saveAnswer()}
                    >
                        Continuar
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RelatoCompleto;
