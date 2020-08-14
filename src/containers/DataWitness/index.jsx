import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";

//Action de Redux
import { sendCargo } from "../../redux/actions/AdmissionAction";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";

const DataWitness = () => {
  const {
    addmissionForm: { testigos, percentage },
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //State

  const [nombre, saveNombre] = useState(() => {
    return !testigos ? "" : testigos.nombre;
  });

  const [cargos, saveCargos] = useState(() => {
    return !testigos ? "" : testigos.cargo;
  });

  const clickSendTestigo = () => {
    dispatch(sendCargo(nombre, cargos));
    dispatch(updateForm("testigoForm", nombre + "-" + cargos));
    dispatch(handleSetStep(14.1));
  };

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(13))}
        percentage={percentage}
      />
      <div>
        <Typography variant="p" component="p" className={classesComun.pregunta}>
          Ingresa los datos del testigo
        </Typography>
      </div>
      <div className={spaceStyle.space2} />

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
          Cargo - Relación
        </Typography>
      </div>

      <div>
        <TextField
          id="cargos"
          value={cargos}
          onChange={(e) => saveCargos(e.target.value)}
          helperText="Ejemplo: Guardia, Jefe, Compañero de trabajo"
          margin="dense"
          variant="outlined"
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
          disabled={!nombre}
          onClick={() => clickSendTestigo()}
        >
          Agregar Testigo
        </Button>
      </div>
    </div>
  );
};

export default DataWitness;
