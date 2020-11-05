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

const DataWitness = () => {
  const {
    addmissionForm: { testigos, percentage },
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
    dispatch(handleSetStep(14.1));
  };

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
          dispatch={() => dispatch(handleSetStep(13))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography variant="p" component="p" className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Solicita una 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
          &nbsp;referencia del testigo
          </Grid>                    
        </Typography>
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
            <Typography
              variant="p"
              component="p"
              className={[comunClass.tituloTextBox]}
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
              autoComplete="off"
              type="text"
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
              className={[comunClass.tituloTextBox]}
            >
              Cargo o Relación
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
