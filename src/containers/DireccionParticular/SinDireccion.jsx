import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import Header from "../../components/header/index";
import image from "./../../img/identify.svg";
import ClearIcon from "@material-ui/icons/Clear";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { Format } from "helpers/strings";

const SinDireccion = () => {
  const {
    addmissionForm: {
      percentage,
      creacionBP
    }
  } = useSelector((state) => state, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const [ direccion, setDireccion ] = useState();
  const [ numero, setNumero ] = useState();
  const [ region, setRegion ] = useState();
  const [ comuna, setComuna ] = useState();

  const { data: segurenciaRegion } = useSelector(
    (state) => state.regionForm,
    shallowEqual
  );

  const { data: segurenciaComuna } = useSelector(
    (state) => state.comunaForm,
    shallowEqual
  );

  const comunaFiltrada = segurenciaComuna.filter(comuna => comuna?.codigo_region === region?.codigo)

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={microsoftReducer.userMsal} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"DireccionParticular-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.2))
          }
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid
          className={[
            comunClass.titleBlack,
            comunClass.titleBlack2,
            comunClass.textPrimaryDesk
          ].join(" ")}
        >
          Ingresa
          <Grid
            component='span'
            className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(" ")}
          >
            &nbsp;la dirección en donde vive el paciente
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={ comunClass.imgPrimaryDesk }>
            <img
              alt='identify'
              src={image}
              className={comunClass.imgPrimaryWidth}
            />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className='container'>
          <div className={[ "row", comunClass.containerTextBox3 ].join(" ")}>
            <div className='col-md-12'>
              <Typography
                className={comunClass.tituloTextBox}
                variant='subtitle2'
                style={{ marginBottom: "8px" }}
              >
                Nombre de la calle
              </Typography>
              <TextField
                id={"CausaEP-Lbl2"}
                autoComplete='off'
                value={direccion}
                variant='outlined'
                error={direccion?.length < 4}
                helperText={direccion?.length < 4 && 'Debe ingresar nombre de la calle'}
                onChange={(e) => {
                  let texto = Format.caracteresInvalidos(e.target.value)
                  setDireccion(texto);
                }}
                margin='dense'
                required
                fullWidth
                InputProps={{
                  endAdornment: <ClearIcon onClick={() => setDireccion(" ")} />
                }}
                inputProps={{ maxLength: 200 }}
              />
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div className={[ "row", comunClass.containerTextBox3 ].join(" ")}>
            <div className='col-md-12'>
              <Typography
                className={comunClass.tituloTextBox}
                variant='subtitle2'
                style={{ marginBottom: "8px" }}
              >
                Número
              </Typography>
              <TextField
                id={'CausaEP-Lbl2'}
                autoComplete='off'
                value={numero}
                variant='outlined'
                onChange={(e) => {
                  let texto = Format.caracteresInvalidos(e.target.value)
                  setNumero(texto);
                }}
                error={numero?.length === 0}
                helperText={numero ? 'Si no tiene número la dirección y contiene una letra, favor escribir "0"' : 'Debe ingresar el numero de la casa o apartamento'}
                margin='dense'
                required
                fullWidth
                InputProps={{
                  endAdornment: <ClearIcon onClick={() => setNumero("")} />
                }}
                inputProps={{ maxLength: 200 }}
              />
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div className={[ "row", comunClass.containerTextBox3 ].join(" ")}>
            <div className='col-md-6'>
              <Typography
                className={comunClass.tituloTextBox}
                variant='subtitle2'
                style={{ marginBottom: "8px" }}
              >
                Region
              </Typography>
              <AutoComplete
                id={"RegionEP-Lbl1"}
                value={region}
                onChange={(event, value) => {
                  setRegion(value);
                }}
                options={segurenciaRegion}
                getOptionLabel={(option) => option.nombre}
                getOptionSelected={(option, value) =>
                  value.value === option.value
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    size='small'
                    error={!region}
                    helperText={!region && 'Debe ingresar una región' }
                    InputProps={{
                      ...params.InputProps,
                      style: { marginTop: "7px" }
                    }}
                  />
                )}
              />
            </div>
            <div className='col-md-6'>
              <Typography
                className={comunClass.tituloTextBox}
                variant='subtitle2'
                style={{ marginBottom: "8px" }}
              >
                Comuna
              </Typography>
              <AutoComplete
                id={"ComunaEP-Lbl1"}
                disabled={!region}
                value={comuna}
                onChange={(event, value) => {
                  setComuna(value);
                }}
                options={comunaFiltrada}
                getOptionLabel={(option) => option.nombre}
                getOptionSelected={(option, value) =>
                  value.value === option.value
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    size='small'
                    error={!comuna }
                    helperText={!comuna && 'Debe ingresar una comuna'}
                    InputProps={{
                      ...params.InputProps,
                      style: { marginTop: "7px" }
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"DireccionParticular-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={!direccion || !numero || !region || !comuna}
            onClick={() => {
              let comunaFinal = "0000000"+region.codigo+comuna.codigo_comuna;
              let direccionFinal = `${direccion} ${numero}, ${comuna.nombre} , Chile`;
              dispatch(updateForm("direccionParticular", direccionFinal))
              dispatch(updateForm("comunaDireccionParticular", comunaFinal))
              dispatch(updateForm("comunaDireccionParticularObjeto", {id: "", codigo_region: "0000000"+region.codigo, codigo_comuna: comuna.codigo_comuna, nombre: comuna.nombre}))
              if (creacionBP) {
                dispatch(handleSetStep(5.4)) // Empresa
              } else {
                dispatch(handleSetStep(5.1));
              }
            }}
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
export default SinDireccion;
