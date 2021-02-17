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
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg'

const DataResponsable = () => {
  const {
    addmissionForm: { responsable, percentage, step }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //State
  const [nombre, saveNombre] = useState(() => {
    return !responsable ? "" : responsable.nombre;
  });
  const [cargos, saveCargos] = useState(() => {
    return !responsable ? "" : responsable.cargo;
  });

  const clickSendResponsable = () => {
    dispatch(sendResponsable(nombre, cargos));
    dispatch(updateForm("responsableForm", nombre + "-" + cargos));
    dispatch(handleSetStep(step + 1));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id="DataResponsable-BtnBack"
          dispatch={() => dispatch(handleSetStep(15))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid  className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Solicita una 
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;referencia del responsable
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
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.containerTextBox}>
          <div>
            <Typography className={comunClass.tituloTextBox}>
              Nombre
            </Typography>
          </div>
          <div>
            <TextField
              id="DataResponsable-Input1"
              value={nombre}
              onChange={(e) => saveNombre(Format.caracteresInvalidos(e.target.value))}
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
            <Typography className={comunClass.tituloTextBox} >
              Cargo o Relación
            </Typography>
          </div>
          <div>
            <TextField
              id="DataResponsable-Input2"
              value={cargos}
              onChange={(e) => saveCargos(Format.caracteresInvalidos(e.target.value))}
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
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id="DataResponsable-Btn1"
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
            disabled={!nombre || !cargos}
            onClick={() => clickSendResponsable()}
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

export default DataResponsable;
