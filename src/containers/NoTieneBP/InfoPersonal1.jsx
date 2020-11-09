import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import DateMasked from "./DateMasked";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AutoComplete from "@material-ui/lab/Autocomplete";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

//Action de Redux
import { sendCargo } from "../../redux/actions/AdmissionAction";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";

const SinBPInfoPersonal1 = () => {
  const bpForm = useSelector(
    (state) => state.addmissionForm.bpForm,
    shallowEqual
  );

  const dispatch = useDispatch();

  const classesComun = getComunStyle();
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
      : bpForm.femenino
        ? "Femenino"
        : "Otro";
  });

  const { percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const [sexos, setSexo] = useState(["Masculino", "Femenino", "Otro"]);

  const handleChange = (event) => {
    saveFechaNacimiento(event.target.value);
  };

  const clickConfirmar = () => {
    // dispatch(sendCargo(nombre, cargos));
     dispatch(updateForm("bpForm", {nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, sexo}));
     dispatch(handleSetStep(5.813));
  };

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(3))}
        percentage={percentage}
      />
      <div>
        <Typography
          variant="p"
          component="p"
          className={classesComun.titleBlack}
        >
          Identifica la información
          <Grid component="span" className={classesComun.titleBlue}>
            &nbsp;personal del paciente
          </Grid>
        </Typography>
      </div>
      <div className={spaceStyle.space2} />

      <div className={classesComun.siniesterList}>
        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Nombres
          </Typography>
        </div>

        <div>
          <TextField
            id="nombre"
            value={nombre}
            onChange={(e) => saveNombre(e.target.value)}
            margin="dense"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullWidth
            InputProps={{
              style: { textTransform: "capitalize !important" },
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
        </div>

        <div className={spaceStyle.space1} />

        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Apellido Paterno
          </Typography>
        </div>

        <div>
          <TextField
            id="apellidoPaterno"
            value={apellidoPaterno}
            onChange={(e) => saveApellidoPaterno(e.target.value)}
            margin="dense"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullWidth
            InputProps={{
              style: {
                textTransform: "capitalize",
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
        </div>

        <div className={spaceStyle.space1} />

        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Apellido Materno
          </Typography>
        </div>

        <div>
          <TextField
            id="apellidoMaterno"
            value={apellidoMaterno}
            onChange={(e) => saveApellidoMaterno(e.target.value)}
            margin="dense"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullWidth
            InputProps={{
              style: {
                textTransform: "capitalize !important",
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
        </div>

        {/* <div className={spaceStyle.space1} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "55%",
            }}
          >
            <div>
              <Typography
                variant="p"
                component="p"
                className={[classesComun.tituloTextbox]}
              >
                Sexo
              </Typography>
            </div>

            <div>
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
                        marginTop: "7px",
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Typography
                variant="p"
                component="p"
                className={[classesComun.tituloTextbox]}
              >
                Fecha de Nacimiento
              </Typography>
            </div>

            <div>
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
          </div>
        </div> */}

        <div className={spaceStyle.space1} />

        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Fecha de Nacimiento
          </Typography>
        </div>

        <div>
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
          {/* <FormControl>
            <Input
              value={fechaNacimiento}
              onChange={handleChange}
              name="textmask"
              id="formatted-text-mask-input"
              inputComponent={DateMasked}
            />
          </FormControl> */}

          {/* <TextField
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(e) => saveFechaNacimiento(e.target.value)}
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
                      saveFechaNacimiento("");
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          /> */}
        </div>

        <div className={spaceStyle.space1} />

        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Sexo
          </Typography>
        </div>

        <div>
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
                    marginTop: "7px",
                  },
                }}
              />
            )}
          />
        </div>
      </div>

      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
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
  );
};

export default SinBPInfoPersonal1;
