import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import AutoComplete from "@material-ui/lab/Autocomplete";
// Action de Redux
import ClearIcon from "@material-ui/icons/Clear";
import Header from "../../components/header/index";
import { Format } from "../../helpers/strings";
import image from './../../img/identify.svg'
import Date from "../../components/Pickers/Date";
import { formatoFecha } from "helpers/utils";

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

  // State
  const [ nombre, saveNombre ] = useState(() => { return !bpForm?.nombre ? "" : Capitalize(bpForm.nombre); });

  const [ apellidoPaterno, saveApellidoPaterno ] = useState(() => { return !bpForm?.apellidoPaterno ? "" : Capitalize(bpForm.apellidoPaterno); });

  const [ apellidoMaterno, saveApellidoMaterno ] = useState(() => { return !bpForm?.apellidoMaterno ? "" : Capitalize(bpForm.apellidoMaterno); });

  const [ fechaNacimiento, saveFechaNacimiento ] = useState(() => { return !bpForm?.fechaNacimiento ? "" : formatoFecha(bpForm.fechaNacimiento) });

  const [ sexo, saveSexo ] = useState(() => { return bpForm?.masculino ? "Masculino" : "Femenino"; });

  const [ fechaValida, setFechaValida ] = useState(bpForm?.fechaNacimiento);

  const { percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const sexos = [ "Masculino", "Femenino" ];

  const clickConfirmar = () => {
    dispatch(updateForm("bpForm", { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, sexo }));
    dispatch(handleSetStep(5.813));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"InfoPersonal1-BtnBack"}
          dispatch={() => dispatch(handleSetStep(3))}
          percentage={percentage}
        />
      </div>

      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component='span' className={[ comunClass.textPrimaryDesk, comunClass.titleBlack ]}>
          Identifica la información
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;personal del paciente
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.containerTextBox}>

          <Grid className={[ comunClass.tituloTextBox ]}>
            Nombres
          </Grid>
          <TextField
            id={"InfoPersonal1-Lbl1"}
            value={nombre}
            onChange={(e) => saveNombre(Format.caracteresInvalidos(e.target.value, false))}
            margin='dense'
            variant='outlined'
            autoComplete='off'
            type='text'
            fullWidth
            InputProps={{
              style: {
                textTransform: "capitalize !important",
                paddingRight: "0"
              },
              endAdornment: (
                <ClearIcon onClick={() => { saveNombre("") }} />
              )
            }}
          />

          <div className={spaceStyle.space1} />

          <Grid className={[ comunClass.tituloTextBox ]}>
            Apellido Paterno
          </Grid>
          <TextField
            id={"InfoPersonal1-Lbl2"}
            value={apellidoPaterno}
            onChange={(e) => saveApellidoPaterno(Format.caracteresInvalidos(e.target.value, false))}
            margin='dense'
            variant='outlined'
            autoComplete='off'
            type='text'
            fullWidth
            InputProps={{
              style: {
                textTransform: "capitalize !important",
                paddingRight: "0"
              },
              endAdornment: (
                    <ClearIcon onClick={() => { saveApellidoPaterno("") }} />
              )
            }}
          />

          <div className={spaceStyle.space1} />

          <Grid className={comunClass.tituloTextBox}>
            Apellido Materno
          </Grid>
          <TextField
            id={"InfoPersonal1-Lbl3"}
            value={apellidoMaterno}
            onChange={(e) => saveApellidoMaterno(Format.caracteresInvalidos(e.target.value, false))}
            margin='dense'
            variant='outlined'
            autoComplete='off'
            type='text'
            fullWidth
            InputProps={{
              style: {
                textTransform: "capitalize !important",
                paddingRight: "0"
              },
              endAdornment: (
                    <ClearIcon onClick={() => { saveApellidoMaterno("") }} />
              )
            }}
          />

          <div className={spaceStyle.space1} />
          <div className={comunClass.paddingElement}>
            <div className={comunClass.widthDateSex}>
              <Grid className={comunClass.tituloTextBox}>
                Fecha de Nacimiento
              </Grid>

              <Date date={fechaNacimiento} setDate={saveFechaNacimiento} id='InfoPersonal1-Lbl4'
style={{marginTop: "10px", marginRight: "10px", paddingRight: "0"}} setValidDate={setFechaValida}
              />

            </div>

            <div className={spaceStyle.space1} />

            <div className={[ comunClass.widthDateSex ]}>
              <Grid className={[ comunClass.tituloTextBox ]}>
                Sexo
              </Grid>
              <AutoComplete
                id={"InfoPersonal1-Lbl5"}
                value={sexo}
                onChange={(event, value) => {
                  saveSexo(value);
                }}
                options={sexos}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        paddingLeft: "5xp",
                        paddingRight: "0",
                        marginTop: "6px"
                      }
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"InfoPersonal1-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            type='submit'
            disabled={
              !nombre ||
              !apellidoPaterno ||
              !apellidoMaterno ||
              !sexo ||
              !fechaValida
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
