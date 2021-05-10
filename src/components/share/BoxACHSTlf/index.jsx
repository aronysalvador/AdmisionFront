import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Typography, withStyles } from "@material-ui/core";
import InputMasked from "../../../containers/EditarTelefono/InputMasked";
import Mask from "../../../containers/EditarTelefono/phone";
import { Pipes } from "../../../containers/EditarTelefono/phone";
import Switch from '@material-ui/core/Switch';
import { ErrorOutline } from "@material-ui/icons";
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";
import { getWelcomeStyle } from "../../../css/welcomeStyle";
import { getComunStyle } from "../../../css/comun";

const BoxACHSTlf = () => {
    const {
        addmissionForm: { step, telefonoParticular: TelefonoEmpleado }
    } = useSelector((state) => state, shallowEqual);

    // const { microsoftReducer } = useSelector((state) => state, shallowEqual);

    // const dispatch = useDispatch();

    const [ telefono, setTelefono ] = useState(() => {
    return TelefonoEmpleado ? TelefonoEmpleado : "+56 9";
    });
    const [ telefonoIsValid, setTelefonoIsValid ] = useState(() => {
    return !!TelefonoEmpleado;
    });

    const classes = cardSiniestroStyles();
    const comunClass = getComunStyle();
    const welcomeStyle = getWelcomeStyle()

    const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== telefono) {
        const result = Pipes.advanced(value);
        const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
        setTelefono(result);
        setTelefonoIsValid(isValid);
    }
    };

    const [ stateCheck, setStateCheck ] = useState(TelefonoEmpleado === "+56 00 000 0000");

    const handleChange = (event) => {
    setStateCheck(event.target.checked);
    if (event.target.checked){
        setTelefono(Pipes.advanced("000000000"));
        setTelefonoIsValid(true);
    } else {
        setTelefono("+56");
        setTelefonoIsValid(false)
    }
    };
    const CustomSwitch = withStyles({
    switchBase: {
        color: "#FAFAFA",
        '&$checked': {
        color: "#00B2A9"
        },
        '&$checked + $track': {
        backgroundColor: "#00B2A9"
        }
    },
    checked: {},
    track: {}
    })(Switch);

    return (<div className={classes.containerBox} style={{margin: '15px 0'}}>
                <div className={classes.cuerpo}>
                    <div className={comunClass.containerTextBox}>
                        <Typography className={comunClass.tituloTextBox}>
                            Teléfono
                        </Typography>
                        <InputMasked
                            id={"EditarTelefonoCorreo-Lbl1"}
                            mask={Mask.advanced}
                            setTelefonoIsValid={setTelefonoIsValid}
                            setTelefono={setTelefono}
                            handleOnChange={handleOnChange}
                            telefono={telefono}
                            disabled={stateCheck}
                            step={step}
                        />
                        <div className={welcomeStyle.titleContainerCardsEmailCorreo}>
                            <div className={welcomeStyle.divRowBottomEmail}>
                                <ErrorOutline />
                                <Typography
                                    variant='inherit'
                                    component='p'
                                    className={welcomeStyle.itemText2}
                                >
                                    Paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin teléfono</span>
                                </Typography>
                                <div style={{ width: "40%", textAlign: "end" }}>
                                    <CustomSwitch
                                        id={"EditarTelefonoCorreo-Chk1"}
                                        checked={stateCheck}
                                        onChange={handleChange}
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
export default BoxACHSTlf;
