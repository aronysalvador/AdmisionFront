import React, { useState } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import InputMasked from "./InputMasked";
import Mask from "./phone";
import { Pipes } from "./phone";
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { ErrorOutline } from "@material-ui/icons";
import Header from "../../components/header/index";

const EditarTelefono = () => {
  const {
    addmissionForm: { percentage, telefonoParticular: TelefonoEmpleado },
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const [telefono, setTelefono] = useState(() => {
    return TelefonoEmpleado ? TelefonoEmpleado : "+56 9";
  });
  const [telefonoIsValid, setTelefonoIsValid] = useState(() => {
    return TelefonoEmpleado ? true : false;
  });

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
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

  const [stateCheck,setStateCheck] = useState( TelefonoEmpleado === "+56 00 000 0000" ? true : false);
  const handleChange = (event) => {
    setStateCheck( event.target.checked );
    if(event.target.checked){
      setTelefono(Pipes.advanced("000000000"));
      setTelefonoIsValid(true);
    }else{
      setTelefono("+56");
      setTelefonoIsValid(false)
    }
  };
  const CustomSwitch = withStyles({
    switchBase: {
      color: "#FAFAFA",
      '&$checked': {
        color: "#00B2A9",
      },
      '&$checked + $track': {
        backgroundColor: "#00B2A9",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography variant="p" component="p" className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Ingresa el 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;teléfono personal
          </Grid>          
        </Typography>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={spaceStyle.space2} />
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Teléfono
          </Typography>
          <InputMasked
            mask={Mask.advanced}
            setTelefonoIsValid={setTelefonoIsValid}
            setTelefono={setTelefono}
            handleOnChange={handleOnChange}
            telefono={telefono}
            disabled={stateCheck}
          />
          <div className={spaceStyle.space1} />

          <div className={welcomeStyle.titleContainerCards2}>
            <div  className={welcomeStyle.divRowBottom2}>
                <ErrorOutline />
                <Typography
                  variant="p"
                  component="p"
                  className={welcomeStyle.itemText2}
                >
                  Agregar paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin teléfono</span>
                </Typography>
            </div>
            <div  className={welcomeStyle.divRowBottom2}>
              <Typography
                    variant="p"
                    component="p"
                    className={welcomeStyle.pBegin}
                  >
                    ¿Está seguro de continuar?
              </Typography>
            </div>
            <div  className={welcomeStyle.divRowBottom2}>
              <CustomSwitch
                checked={stateCheck}
                onChange={handleChange}
                color="default"
              />
            </div>
          </div>
        </div> 
        <div className={comunClass.bottomElement}>
          <Button
            variant="contained"
            className={comunClass.buttonAchs}
            disabled={!telefonoIsValid}
            onClick={() => {
              dispatch(updateForm("telefonoParticular", telefono));
              dispatch(handleSetStep(5.1));
            }}
          >
            Actualizar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default EditarTelefono;
