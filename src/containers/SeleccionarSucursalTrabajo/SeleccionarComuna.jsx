import { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm, validarAfiliacion } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography, TextField, Button } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import CardSucursal from "../../components/CardSucursal/CardSucursal";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const SeleccionarComuna = ({ sucursalesEmpresa }) => {
  const {
    percentage,
    comunaSucursal,
    cantidadSucursales,
    sucursales: sucursales2,
    creacionBP,
    rut, rutEmpresa
  } = useSelector((state) => state.addmissionForm, shallowEqual);

  const { microsoftReducer, sucursalesForm } = useSelector((state) => state, shallowEqual);

  const { data: comunaList } = useSelector(
    (state) => state.comunaForm,
    shallowEqual
  );

  const [ switchvalid, setValidSwitch ] = useState(false);
  const [ stateCheck, setStateCheck ] = useState(false);

  const [ numeroSucursales, setNumeroSucursales ] = useState(cantidadSucursales);
  const [ sucursales, setSucursales ] = useState(sucursales2);
  const [ comuna, setComuna ] = useState(comunaSucursal);
  const [ listaComunas, setListaComunas ] = useState([]);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    let variables = []
    sucursalesEmpresa.forEach((sucursal, i) => {
      variables.push({id: i, codigo_region: sucursal.codigo_region, codigo_comuna: sucursal.id_comuna, nombre: sucursal.comuna})
    })

    let uniqueArray = removeDuplicates(variables, "nombre");
    uniqueArray.sort((a, b) => a.nombre < b.nombre ? -1 : +(a.nombre > b.nombre));

    setListaComunas(uniqueArray);

    // eslint-disable-next-line
  }, [comunaList]);

  useEffect(() => {
    let result = sucursalesForm?.data ? sucursalesForm.data.filter((o) => o.tipo_sucursal === "CASA MATRIZ") : [];
    if (result.length>0){
      setSucursales(result)
      setNumeroSucursales(1)
      setComuna({id: 0, codigo_region: result.codigo_region, codigo_comuna: result.id_comuna, nombre: result.comuna});
      setValidSwitch(true)
    }
  }, []);

  const removeDuplicates = (originalArray, prop) => {
    let newArray = [];
    let lookupObject = {};

    for (let i in originalArray)
      lookupObject[originalArray[i][prop]] = originalArray[i];

    for (let i in lookupObject)
      newArray.push(lookupObject[i]);

    return newArray;
  }

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"SeleccionarComuna-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.4))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Identifica la comuna de la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;sucursal del trabajador
          </Grid>
          &nbsp;
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox} style={{marginBottom: '8px'}}>
            Comuna
          </Typography>
          <AutoComplete
            id={"SeleccionarComuna-Lbl1"}
            value={comuna}
            onChange={(event, value) => {
              const sucursalesComuna = sucursalesEmpresa.filter(
                (x) =>
                  x.id_comuna === value?.codigo_comuna &&
                  parseInt(value?.codigo_region) === parseInt(x?.codigo_region)
              );
              setNumeroSucursales(sucursalesComuna.length);
              setSucursales(sucursalesComuna);
              setComuna(value);
              setValidSwitch(false)
            }}
            size='small'
            fullWidth
            options={listaComunas}
            getOptionLabel={(option) => option.nombre}
            renderInput={(params) => <TextField {...params} variant='outlined' />}
          />
          <div className={spaceStyle.space2} />
          {numeroSucursales === 1 ? (
            <CardSucursal sucursales={sucursales[0]} stateCheck={stateCheck} setStateCheck={setStateCheck} />
          ) : null}
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"SeleccionarComuna-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={!comuna || (switchvalid && !stateCheck)}
            onClick={() => {
              dispatch(updateForm("cantidadSucursales", numeroSucursales));
              dispatch(updateForm("comunaSucursal", comuna));
              if (numeroSucursales > 1) {
                dispatch(updateForm("sucursales", sucursales));
                dispatch(handleSetStep(5.6));
              }
              if (numeroSucursales === 1) {
                dispatch(updateForm("sucursales", sucursales));
                dispatch(updateForm("SucursalEmpresaObjeto", sucursales[0]));
                dispatch(updateForm("SucursalEmpresa", sucursales[0].nombre));
                dispatch(updateForm("DireccionEmpresa", sucursales[0].direccion));
                dispatch(updateForm("codigoSucursal", sucursales[0].codigo));
                dispatch(updateForm("comunaEmpresa", sucursales[0].comuna))
                dispatch(updateForm("sucursalCargo", sucursales[0].sucursalCargo));
                creacionBP ? dispatch(validarAfiliacion({ rutPaciente: rut, rutEmpresa, BpSucursal: sucursales[0].codigo})) : dispatch(handleSetStep(5.1));
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

export default SeleccionarComuna;
