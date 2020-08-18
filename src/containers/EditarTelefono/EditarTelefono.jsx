import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import InputMasked from "./InputMasked";
import Mask from "./phone";
import { Pipes } from "./phone";

const EditarTelefono = () => {
  const {
    addmissionForm: { percentage, telefonoParticular: TelefonoEmpleado },
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const [telefono, setTelefono] = useState(() => {
    return TelefonoEmpleado ? TelefonoEmpleado : "+56 9";
  });
  const [telefonoIsValid, setTelefonoIsValid] = useState(() => {
    return TelefonoEmpleado ? true : false;
  });

  const {
    root,
    buttonAchs,
    pregunta,
    tituloTextbox,
    bottomElement,
  } = getComunStyle();
  
  const spaceStyle = getSpaceStyle();

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== telefono) {
      const result = Pipes.advanced(value);
      const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
      setTelefono(result);
      setTelefonoIsValid(isValid);
    }
  };

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={pregunta} variant="h2">
        Ingresa tu teléfono personal
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="h2">
        Teléfono
      </Typography>

      <InputMasked
        mask={Mask.advanced}
        setTelefonoIsValid={setTelefonoIsValid}
        setTelefono={setTelefono}
        handleOnChange={handleOnChange}
        telefono={telefono}
      />

      <div className={bottomElement}>
        <Button
          variant="contained"
          className={buttonAchs}
          disabled={!telefonoIsValid}
          onClick={() => {
            dispatch(updateForm("telefonoParticular", telefono));
            dispatch(handleSetStep(5.1));
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default EditarTelefono;
