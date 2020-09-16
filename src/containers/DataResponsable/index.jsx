import React, { useState } from "react";
// import React, { useState, useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";

//Action de Redux
import { sendResponsable } from "../../redux/actions/AdmissionAction";
// import { searchCargos } from "../../redux/actions/WitnessResponsableAction";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";

const DataResponsable = () => {
  const {
    addmissionForm: { responsable, percentage, step },
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //State
  const [nombre, saveNombre] = useState(() => {
    return !responsable ? "" : responsable.nombre;
  });
  const [cargos, saveCargos] = useState(() => {
    return !responsable ? "" : responsable.cargo;
  });

  // const initFn = useCallback(() => {
  //   const consultaCargos = () => dispatch(searchCargos()); // eslint-disable-line no-use-before-define
  //   consultaCargos();
  // }, [dispatch]);

  // useEffect(() => {
  //   //Call Action
  //   initFn()
  // }, [initFn]);

  const clickSendResponsable = () => {
    dispatch(sendResponsable(nombre, cargos));
    dispatch(updateForm("responsableForm", nombre + "-" + cargos));
    dispatch(handleSetStep(step + 1));
  };

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(15))}
        percentage={percentage}
      />
      <div>
        <Typography variant="p" component="p" className={classesComun.titleBlack}>
        Solicita una 
        <div className={classesComun.titleBlue}>
          &nbsp;referencia del responsable
        </div>
        </Typography>
      </div>
      <div className={spaceStyle.space1} />

      <div>
        <Typography
          variant="p"
          component="p"
          className={[classesComun.tituloTextbox]}
        >
          Nombre
        </Typography>
      </div>

      <div>
        <TextField
          id="nombre"
          value={nombre}
          onChange={(e) => saveNombre(e.target.value)}
          helperText="Ejemplo: Luis Morales"
          margin="dense"
          variant="outlined"
          fullWidth
          autoComplete="off"
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    saveNombre("");
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={spaceStyle.space1} />

      <div>
        <Typography
          variant="p"
          component="p"
          className={[classesComun.tituloTextbox]}
        >
          Cargo o Relación
        </Typography>
      </div>

      <div>
        <TextField
          id="cargos"
          value={cargos}
          onChange={(e) => saveCargos(e.target.value)}
          helperText="Ejemplo: Jefe de área, Prevencionista"
          margin="dense"
          variant="outlined"
          autoComplete="off"
          type="text"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    saveCargos("");
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          type="submit"
          disabled={!nombre || !cargos}
          onClick={() => clickSendResponsable()}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
};

export default DataResponsable;
