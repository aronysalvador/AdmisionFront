import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

//Action de Redux
import { sendCargo } from "../../redux/actions/AdmissionAction";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import InputMasked from "../../containers/EditarTelefono/InputMasked";
import Mask from "../../containers/EditarTelefono/phone";
import { Pipes } from "../../containers/EditarTelefono/phone";

const DataWitness = () => {
  const {
    addmissionForm: { testigos, percentage, tipoSiniestro, step },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
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
    dispatch(updateForm("telefonoTestigo", telefono)) //¿se debe incluir en sendCargo?
    dispatch(handleSetStep(14.1));
  };

  const [telefono, setTelefono] = useState("+56 9");

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== telefono) {
      const result = Pipes.advanced(value);
      setTelefono(result);
    }
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(13))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid  className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Solicita una 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
          &nbsp;referencia del testigo
          </Grid>                    
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Nombre
            </Typography>
          </div>
          <div>
            <TextField
              id="nombre"
              value={nombre}
              onChange={(e) => saveNombre(Format.caracteresInvalidos(e.target.value))}
              helperText="Ejemplo: Luis Morales"
              margin="dense"
              variant="outlined"
              autoComplete="off"
              type="text"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => { saveNombre("") }}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Cargo o Relación
            </Typography>
          </div>
          <div>
            <TextField
              id="cargos"
              value={cargos}
              onChange={(e) => saveCargos(Format.caracteresInvalidos(e.target.value))}
              helperText="Ejemplo: Guardia, Jefe, Compañero de trabajo"
              margin="dense"
              variant="outlined"
              autoComplete="off"
              type="text"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => { saveCargos("") }}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={spaceStyle.space1} />
          {tipoSiniestro.Id === 2 &&
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Teléfono (Opcional)
            </Typography>
            <InputMasked
              mask={Mask.advanced}
              setTelefono={setTelefono}
              handleOnChange={handleOnChange}
              telefono={telefono}
              step={step}
            />
          </div>}
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
            disabled={!nombre || !cargos}
            onClick={() => clickSendTestigo()}
          >
            Agregar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default DataWitness;
