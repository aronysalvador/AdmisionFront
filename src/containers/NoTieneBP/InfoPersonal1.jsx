import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import DateMasked from "./DateMasked";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import AutoComplete from "@material-ui/lab/Autocomplete";

//Action de Redux
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";


const SinBPInfoPersonal1 = () => {
  const bpForm = useSelector(
    (state) => state.addmissionForm.bpForm,
    shallowEqual
  );
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  //State
  const [nombre, saveNombre] = useState(() => {
    return !bpForm.nombre ? "" : Capitalize(bpForm.nombre);
  });

  const [apellidoPaterno, saveApellidoPaterno] = useState(() => {
    return !bpForm.apellidoPaterno ? "" : Capitalize(bpForm.apellidoPaterno);
  });

  const [apellidoMaterno, saveApellidoMaterno] = useState(() => {
    return !bpForm.apellidoMaterno ? "" : Capitalize(bpForm.apellidoMaterno);
  });

  const formatDate = (fecha) => {
    let fechaSplitted = fecha.split("-");
    return fechaSplitted[2] + "/" + fechaSplitted[1] + "/" + fechaSplitted[0];
  };

  const [fechaNacimiento, saveFechaNacimiento] = useState(() => {
    return !bpForm.fechaNacimiento ? "" : formatDate(bpForm.fechaNacimiento);
  });

  const [sexo, saveSexo] = useState(() => {
    return bpForm.masculino
      ? "Masculino"
      : "Femenino";
  });

  const { percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const sexos = ["Masculino", "Femenino"];

  const clickConfirmar = () => {
    dispatch(updateForm("bpForm", { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, sexo }));
    dispatch(handleSetStep(5.813));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(3))}
          percentage={percentage}
        />
      </div>
      
      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component="span" className={[comunClass.textPrimaryDesk, comunClass.titleBlack]}>
          Identifica la información
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;personal del paciente
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.containerTextBox}>
           
              <Grid className={[comunClass.tituloTextBox]}>
                Nombres
              </Grid>
              <TextField
                id="nombre"
                value={nombre}
                onChange={(e) => saveNombre(Format.caracteresInvalidos(e.target.value, false))}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                fullWidth
                InputProps={{
                  style: {
                    textTransform: "capitalize !important",
                    paddingRight: "0",
                  },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{
                        textTransform: "capitalize !important",
                      }}
                    >
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
          

            <div className={spaceStyle.space1} />

              <Grid className={[comunClass.tituloTextBox]}>
                Apellido Paterno
              </Grid>
              <TextField
                id="apellidoPaterno"
                value={apellidoPaterno}
                onChange={(e) => saveApellidoPaterno(Format.caracteresInvalidos(e.target.value, false))}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                fullWidth
                InputProps={{
                  style: {
                    textTransform: "capitalize !important",
                    paddingRight: "0",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          saveApellidoPaterno("");
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
         

            <div className={spaceStyle.space1} />

              <Grid className={[comunClass.tituloTextBox]}>
                Apellido Materno
              </Grid>
              <TextField
                id="apellidoMaterno"
                value={apellidoMaterno}
                onChange={(e) => saveApellidoMaterno(Format.caracteresInvalidos(e.target.value, false))}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                type="text"
                fullWidth
                InputProps={{
                  style: {
                    textTransform: "capitalize !important",
                    paddingRight: "0",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          saveApellidoMaterno("");
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

            <div className={spaceStyle.space1} />
            <div className={comunClass.paddingElement}>
              <div className={[comunClass.widthDateSex]}>
                <Grid className={[comunClass.tituloTextBox]}>
                  Fecha de Nacimiento
                </Grid>
                <TextField
                  id="fechaNacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => saveFechaNacimiento(e.target.value)}
                  margin="dense"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  fullWidth           
                  InputProps={{
                    inputComponent:DateMasked,
                    style: {
                      marginRight: "10px",
                      paddingRight: "0",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            saveFechaNacimiento("");
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

              <div className={[comunClass.widthDateSex]}>
                <Grid className={[comunClass.tituloTextBox]}>
                  Sexo
                </Grid>
                <AutoComplete
                  value={sexo}
                  onChange={(event, value) => {
                    saveSexo(value);
                  }}
                  options={sexos}
                  getOptionLabel={(option) => option}                  
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          paddingLeft: "5xp",
                          paddingRight: "0",
                          marginTop: "6px",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
            disabled={
              !nombre ||
              !apellidoPaterno ||
              !apellidoMaterno ||
              !fechaNacimiento ||
              !sexo
            }
            onClick={() => clickConfirmar()}
          >
            Confirmar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default SinBPInfoPersonal1;
