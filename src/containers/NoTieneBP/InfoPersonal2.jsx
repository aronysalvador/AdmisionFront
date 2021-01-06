import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const SinBPInfoPersonal2 = () => {
  const {
    addmissionForm: { percentage, bpForm, nacionalidadForm, idiomaForm, paisForm },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
    
  const { data: nacionalidadList } = useSelector((state) => state.nacionalidadForm, shallowEqual);
  const { data: paisesList } = useSelector((state) => state.paisForm, shallowEqual);
  const { data: idiomasList } = useSelector((state) => state.idiomaForm, shallowEqual);

  const [nacionalidad, setNacionalidad] = useState(() => {
    return !nacionalidadForm ? {key: "CL", value: "chilena"} : nacionalidadForm;
  });
  const [idioma, setIdioma] = useState(() => {
    return !idiomaForm ? {key: "ES", value: "Español"} : idiomaForm;
  });
  const [pais, setPais] = useState(() => {
    return !paisForm ? {key: "CL", value: "Chile"} : paisForm;
  });


  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const clickConfirmar = () => {
    dispatch(
      updateForm("datosAdicionalesSAP", {
        apellidoMaterno: bpForm.apellidoMaterno,
        apellidoPaterno: bpForm.apellidoPaterno,
        nombre: bpForm.nombre,
        fechaNacimiento: bpForm.fechaNacimiento,
        masculino: bpForm.sexo === "Masculino" ? "X" : "",
        femenino:  bpForm.sexo === "Femenino" ? "X" : "",
        nacionalidad: nacionalidad.key,
        lugarNacimiento: pais.key,
        estadoCivil: "",
      })
    );
     dispatch(updateForm("bpForm2", {nacionalidad, pais, idioma}));
     dispatch(updateForm("creacionBP", true));
     dispatch(handleSetStep(5.4));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"InfoPersonal2-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.812))}
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
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <div>
            <Grid className={[comunClass.tituloTextBox]} for={"InfoPersonal2-Lbl1"}>
              Nacionalidad
            </Grid>
          
            <AutoComplete
              id={"InfoPersonal2-Lbl1"}
              value={nacionalidad}
              onChange={(event, value) => {
                setNacionalidad(value);
              }}
              options={nacionalidadList}
              getOptionLabel={(option) => option.value}
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
            <Grid className={[comunClass.tituloTextBox]} for={"InfoPersonal2-Lbl2"}>
              País de nacimiento
            </Grid>
            <AutoComplete
              id={"InfoPersonal2-Lbl2"}
              value={pais}
              onChange={(event, value) => {
                setPais(value);
              }}
              options={paisesList}
              getOptionLabel={(option) => option.value}
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
            <Grid className={[comunClass.tituloTextBox]} for={"InfoPersonal2-Lbl3"}>
              Idioma
            </Grid>
            <AutoComplete
              id={"InfoPersonal2-Lbl3"}
              value={idioma}
              onChange={(event, value) => {
                setIdioma(value);
              }}
              options={idiomasList}
              getOptionLabel={(option) => option.value}
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
        <div className={comunClass.bottomElement}>
          <Button
            id={"InfoPersonal2-Btn1"}
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
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

export default SinBPInfoPersonal2;
