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
        color: '#00B2A9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const RelatoCompleto = () => {
    const { addmissionForm: { percentage, lugarAccidente, descripcionAccidente, objetoAccidente, coberturaSoap, desarrollarTrabajoHabitual, tipoSiniestro }, microsoftReducer:{userMsal} } = useSelector((state) => state, shallowEqual);
    const dispatch = useDispatch();
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const welcomeStyle = getWelcomeStyle();

    const [text1, setText1] = useState(() => {
        return !lugarAccidente ? "Al momento del accidente estaba " : lugarAccidente;
    });

    const [text2, setText2] = useState(() => {
        return !descripcionAccidente ? "Lo que ocurrió fue que " : descripcionAccidente;
    });

    const [text3, setText3] = useState(() => {
        return !objetoAccidente ? "El accidente ocurrió con " : objetoAccidente;
    });

    const [stateCheckbox, setStateCheckbox] = useState(() => {
        return coberturaSoap === "si" ? true : false 
      });

    // const [activo, setActivo] = useState(() => {
    //     return desarrollarTrabajoHabitual === "si" ? true : false 
    // });

    const onChangeValue1 = (e) => {
        setText1(Format.caracteresInvalidos(e.target.value));
    };

    const onChangeValue2 = (e) => {
        setText2(Format.caracteresInvalidos(e.target.value));
    };

    const onChangeValue3 = (e) => {
        setText3(Format.caracteresInvalidos(e.target.value));
    };

    const handleCheckBoxChange = (event) => {
        setStateCheckbox( event.target.checked );
    };

    var respSoap = stateCheckbox ? "si" : "no" ;

    const handleOnClick = (respuesta) => {
        dispatch(updateForm("desarrollarTrabajoHabitual", respuesta));
      };

    const respuestaOriginal  = objetoAccidente;
    const saveAnswer = () => {
        dispatch(updateForm("lugarAccidente", text1));
        dispatch(updateForm("descripcionAccidente", text2));
        dispatch(updateForm("objetoAccidente", text3));
        dispatch(updateForm("coberturaSoap", respSoap));
        dispatch(handleSetStep(8.1));
        if(respuestaOriginal !== text3) {
          dispatch(updateForm("volverAConcatenar", true));
        }
    };

    return (
        <div className={comunClass.root}>
        <div className={comunClass.displayDesk}> 
            <Header userMsal={ userMsal }/>
        </div>
        <div className={comunClass.beginContainerDesk}>
            <Cabecera
            dispatch={() => dispatch(handleSetStep("x",6))}
            percentage={percentage}
            />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>
                    <div className={['row', comunClass.backgroundGrey].join(' ')}>

                    <Grid className={`${comunClass.textPrimaryRelato}`} >
                            ¿Qué estaba haciendo 
                            <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp; justo antes del accidente?
                            </Grid> 
                        </Grid>                   
                    <TextField
                        id="txtRespuesta1"
                        value={text1}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={text1.length - 32 < 5 &&"Se necesita al menos 5 caracteres"}
                        error={text1.length - 32 < 5} 
                        onChange={text1.length >= 32 ? onChangeValue1 : setText1("Al momento del accidente estaba ")}
                        defaultValue="Al momento del accidente estaba "
                    />
                    <label className={comunClass.pullRight}>{text1.length }/200</label>

                    <Grid className={`${comunClass.textPrimaryRelato}`} >
                            ¿Qué 
                            <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp; ocurrió y qué lesión &nbsp;
                            </Grid> 
                            presenta?
                    </Grid>                   
                    <TextField
                        id="txtRespuesta"
                        value={text2}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={text2.length - 23 < 5 &&"Se necesita al menos 5 caracteres"}
                        error={text2.length - 23 < 5} 
                        onChange={text2.length >= 23 ? onChangeValue2 : setText2("Lo que ocurrió fue que ")}
                        defaultValue={"Lo que ocurrió fue que me "}
                    />
                    <label className={comunClass.pullRight}>{text2.length}/200</label>

                    <Grid className={`${comunClass.textPrimaryRelato}`} >
                        ¿Con
                        <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                            &nbsp; qué ocurrió el acciendente
                        </Grid> 
                        ?
                    </Grid>                   
                    <TextField
                        id="txtRespuesta"
                        value={text3}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        rows={5}
                        inputProps={{ maxLength: 200 }}
                        helperText={text3.length - 25 < 5 &&"Se necesita al menos 5 caracteres"}
                        error={text3.length - 25 < 5} 
                        onChange={text3.length >= 25 ? onChangeValue3 : setText3("El accidente ocurrió con ")}
                        defaultValue={"El accidente ocurrió con "}
                    />
                    <label className={comunClass.pullRight}>{text3.length}/200</label>

                    </div>
                    <div className={spaceStyle.space1} />

                    {tipoSiniestro.Id === 1 && 
                        <>
                        <div className={['row', comunClass.backgroundGrey].join(' ')}>
                        <div className="col-md-10" style={{textAlign:"left"}}>
                        <Grid className={`${comunClass.textPrimaryRelato}`} >
                            Al momento del accidente, ¿desarrollaba su
                            <Grid component="span"  className={`${comunClass.textPrimaryRelatoBlue}`}>
                                &nbsp;trabajo habitual
                            </Grid> 
                            ?
                        </Grid>
                        </div>
                        <div className="col-md-2" style={{ display: "contents" }}>
                            <img
                            alt="siTrabajo"
                            src={desarrollarTrabajoHabitual ==="Si" ? yesActive : yesDisabled}
                            type="button"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleOnClick("Si")}
                            />

                            <img
                            alt="noTrabajo"
                            src={desarrollarTrabajoHabitual ==="No" ? notActive :notDisabled}
                            type="button"
                            onClick={() => handleOnClick("No")}                       
                            />
                        </div>
                    </div>                   
                    </>
                    }
                    <div className="row">
                        <Typography className={welcomeStyle.switchText}>
                            <Grid component="span">
                            <BlueCheckbox checked={stateCheckbox} onChange={handleCheckBoxChange} />
                            </Grid>
                            Corresponde a cobertura &nbsp;<b>SOAP</b>
                        </Typography>
                    </div>
                    <div style={{ position: "relative", textAlign:"center" }}>
                    <Button
                        className={comunClass.buttonAchs}
                        variant="contained"
                        //disabled={!(text1.length - 32 > 4) || !(text2.length - 23 > 4) || !(text3.length - 25 > 4) || !(desarrollarTrabajoHabitual)}
                        disabled={tipoSiniestro.Id === 1 ? !(text1.length - 32 > 4) || !(text2.length - 23 > 4) || !(text3.length - 25 > 4) || !(desarrollarTrabajoHabitual) : (!(text1.length - 32 > 4) || !(text2.length - 23 > 4) || !(text3.length - 25 > 4) )}
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
