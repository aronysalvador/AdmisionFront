import React, { useState } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm, validarAfiliacion } from "../../redux/actions/AdmissionAction";
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
import image from './../../img/identify.svg'

const EditarTelefono = () => {
  const {
    addmissionForm: { step, percentage, telefonoParticular: TelefonoEmpleado, creacionBP, rut, rutEmpresa, SucursalEmpresaObjeto, direccionParticular },
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
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"EditarTelefono-BtnBack"}
          dispatch={() => (creacionBP ? dispatch(handleSetStep(5.2)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={`${comunClass.titleBlack} ${comunClass.titleBlack2} ${comunClass.textPrimaryDesk}`}>
          Ingresa el 
          <Grid component="span"  className={`${comunClass.titleBlue} ${comunClass.titleBlue2}`}>
            &nbsp;teléfono personal
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
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Teléfono
          </Typography>
          <InputMasked
            id={"EditarTelefono-Lbl1"}
            mask={Mask.advanced}
            setTelefonoIsValid={setTelefonoIsValid}
            setTelefono={setTelefono}
            handleOnChange={handleOnChange}
            telefono={telefono}
            disabled={stateCheck}
            step={step}
          />
          <div className={spaceStyle.space1} />

          <div className={welcomeStyle.titleContainerCardsEmail}>
            <div  className={welcomeStyle.divRowBottomEmail}>
              <ErrorOutline />
              <Typography
                variant="inherit"
                component="p"
                className={welcomeStyle.itemText2}
               
              >
                Agregar paciente&nbsp;<span style={{ color: "#00B2A9" }}>sin teléfono</span>
              </Typography>
            </div>
            <div className={welcomeStyle.divRowBottomEmail}>
              <Typography className={welcomeStyle.pBegin}>
                ¿Está seguro de continuar?
              </Typography>
            </div>
            <div  className={welcomeStyle.divRowBottomEmail}>
              <CustomSwitch
                id={"EditarTelefono-Chk1"}
                checked={stateCheck}
                onChange={handleChange}
                color="default"
              />
            </div>
          </div>
        </div> 
        <div className={comunClass.bottomElement}>
          <Button
            id={"EditarTelefono-Btn1"}
            variant="contained"
            className={comunClass.buttonAchs}
            disabled={!telefonoIsValid}
            onClick={() => {
              dispatch(updateForm("telefonoParticular", telefono));
              if(creacionBP)
              {
                if(!direccionParticular){
                  dispatch(handleSetStep(5.2))
                }
                else if(rut && rutEmpresa && SucursalEmpresaObjeto){
                  dispatch(validarAfiliacion({ rutPaciente: rut, rutEmpresa, BpSucursal: SucursalEmpresaObjeto.codigo}));
                }else{
                  dispatch(handleSetStep(500));
                }
              }
              else 
              { //Flujo normal
                dispatch(handleSetStep(5.1))
              }
            }
          }
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
