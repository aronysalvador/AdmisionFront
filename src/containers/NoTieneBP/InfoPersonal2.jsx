import React, { useState, useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getNacionalidades } from "./../../redux/actions/NacionalidadesAction";
import { getPaises } from "./../../redux/actions/PaisesAction";
import { getIdiomas } from "./../../redux/actions/IdiomasAction";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

//Action de Redux
import { sendCargo } from "../../redux/actions/AdmissionAction";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";

const SinBPInfoPersonal2 = () => {
  const {
    addmissionForm: { percentage, nacionalidadForm, idiomaForm, paisForm },
  } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getNacionalidades());
    dispatch(getIdiomas());
    dispatch(getPaises());
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);


  const [nacionalidad, setNacionalidad] = useState(() => {
    return !nacionalidadForm ? "" : nacionalidadForm;
  });
  const [idioma, setIdioma] = useState(() => {
    return !idiomaForm ? "" : idiomaForm;
  });
  const [pais, setPais] = useState(() => {
    return !paisForm ? "" : paisForm;
  });

  const { data: nacionalidadList } = useSelector((state) => state.nacionalidadForm, shallowEqual);
  const { data: paisesList } = useSelector((state) => state.paisForm, shallowEqual);
  const { data: idiomasList } = useSelector((state) => state.idiomaForm, shallowEqual);


  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const clickConfirmar = () => {
     dispatch(updateForm("bpForm", {nacionalidad, pais, idioma}));
     dispatch(handleSetStep(5.4));
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
      <div>
        <Typography
          variant="p"
          component="p"
          className={[classesComun.tituloTextbox]}
        >
          Nacionalidad
          </Typography>
      </div>

      <div>
      <AutoComplete
        value={nacionalidad}
        onChange={(event, value) => {
          setNacionalidad(value);
        }}
        style={{ width: 300 }}
        options={nacionalidadList}
         getOptionLabel={(option) => option.nombre}
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
      <div className={spaceStyle.space2} />
      <div>
        <Typography
          variant="p"
          component="p"
          className={[classesComun.tituloTextbox]}
        >
          País de nacimiento
          </Typography>
      </div>

      <div>
      <AutoComplete
        value={pais}
        onChange={(event, value) => {
          setPais(value);
        }}
        style={{ width: 300 }}
        options={paisesList}
         getOptionLabel={(option) => option.nombre}
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
      <div className={spaceStyle.space2} />
      <div>
        <Typography
          variant="p"
          component="p"
          className={[classesComun.tituloTextbox]}
        >
          Idioma
          </Typography>
      </div>

      <div>
      <AutoComplete
        value={idioma}
        onChange={(event, value) => {
          setIdioma(value);
        }}
        style={{ width: 300 }}
        options={idiomasList}
         getOptionLabel={(option) => option.nombre}
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

      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          type="submit"
          onClick={() => clickConfirmar()}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default SinBPInfoPersonal2;
