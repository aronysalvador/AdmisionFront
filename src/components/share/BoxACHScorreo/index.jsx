import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Typography, withStyles } from "@material-ui/core";
// import InputMasked from "../../../containers/EditarTelefono/InputMasked";
// import Mask from "../../../containers/EditarTelefono/phone";
// import { Pipes } from "../../../containers/EditarTelefono/phone";
import Switch from '@material-ui/core/Switch';
import { ErrorOutline } from "@material-ui/icons";
import { validateEmailFormat } from "../../../helpers/email";
import Email from 'react-email-autocomplete';
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";
import { getWelcomeStyle } from "../../../css/welcomeStyle";
import { getComunStyle } from "../../../css/comun";

const BoxACHSCorreo = () => {
    const {
        addmissionForm: { step, emailusuario }
    } = useSelector((state) => state, shallowEqual);

    // const { microsoftReducer } = useSelector((state) => state, shallowEqual);

    // const dispatch = useDispatch();

    const classes = cardSiniestroStyles();
    const comunClass = getComunStyle();
    const welcomeStyle = getWelcomeStyle()

    const CustomSwitch = withStyles({
        switchBase: {
        color: "#FAFAFA",
        '&$checked': {
            color: "#00B2A9"
        },
        '&$checked + $track': {
            backgroundColor: "#00B2A9"
        }},
        checked: {},
        track: {}
    })(Switch);

    const [ userEmail, setUserEmail ] = useState(() => {
        return !emailusuario || emailusuario==="notienecorreo@achs.cl" ? "" : emailusuario;
    });
    //   const inputRef  = React.useRef();
    const [ stateCheck2, setStateCheck2 ] = useState(() => {
        return (emailusuario==="notienecorreo@achs.cl")? 1 : 0
    });
    const [ isEmailValid, setIsEmailValid ] = useState(true);

    const handleChange2 = (event) => {
    // document.getElementById("userEmail").value="xxx"

        setStateCheck2(event.target.checked);
        if (event.target.checked){
        setIsEmailValid(validateEmailFormat("notienecorreo@achs.cl"));
        setUserEmail("notienecorreo@achs.cl");
        //   inputRef.current.value = "notienecorreo@achs.cl";
        } else {
        setIsEmailValid(false);
        setUserEmail("");
        //   inputRef.current.value = "";
        }
    };

    const handleEmailChange = (e) => {
        // console.log("cambiando: "+e.target.value)
        let valid = validateEmailFormat(e.target.value)
        setIsEmailValid(valid);
        setUserEmail(e.target.value);
    };

    return (<div className={classes.containerBox} style={{margin: '15px 0'}}>
                <div className={classes.cuerpo}>
                    <div className={comunClass.containerTextBox} style={{minWidth: '350px'}}>
                        <Typography className={comunClass.tituloTextBox}>
                            Correo
                        </Typography>

                            <Email
                                value={userEmail}
                                name='userEmail'
                                id='userEmail'
                                // ref={inputRef}
                                className={"form-control MuiOutlinedInput-input Mui-disabled Mui-disabled MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"}
                                domains={ [ 'outlook.com', 'yahoo.com', 'gmail.com', 'hotmail.com', 'icloud.com', 'apple.com', 'aol.com', 'zoho.com' ] }
                                onBlur={(e) => { handleEmailChange(e) }}
                                onChange={(e) => { handleEmailChange(e) }}
                                onKeyDown={(e) => { handleEmailChange(e) }}
                                autoComplete='off'
                                disabled={stateCheck2}
                            />
                            <p style={{color: "#f44336"}} className={"MuiFormHelperText-root MuiFormHelperText-contained MuiFormHelperText-filled Mui-required MuiFormHelperText-marginDense"}>{ stateCheck2 ? null : !isEmailValid && "Escriba un email válido"}</p>
                        <div className={welcomeStyle.titleContainerCardsEmailCorreo}>
                            <div className={welcomeStyle.divRowBottomEmail}>
                            <ErrorOutline />
                            <Typography
                                variant='inherit'
                                component='p'
                                className={welcomeStyle.itemText2}

                            >
                                Paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin e-mail</span>
                            </Typography>
                                <div style={{ width: "40%", textAlign: "end" }}>
                                    <CustomSwitch
                                        id='ValidarCorreoElectronico-CustomSwitch1'
                                        checked={stateCheck2}
                                        onChange={handleChange2}
                                        color='default'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    );
}
export default BoxACHSCorreo;
