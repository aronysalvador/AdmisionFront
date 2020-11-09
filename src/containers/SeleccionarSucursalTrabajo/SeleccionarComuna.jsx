import React, { useState, useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography, TextField, Button } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import CardSucursal from "../../components/CardSucursal/CardSucursal";
import { getComuna } from "../../redux/actions/ComunaAction";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const SeleccionarComuna = ({ sucursalesEmpresa }) => {
  const {
    percentage,
    comunaSucursal,
    cantidadSucursales,
    sucursales: sucursales2,
  } = useSelector((state) => state.addmissionForm, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { data: comunaList } = useSelector(
    (state) => state.comunaForm,
    shallowEqual
  );

  const [numeroSucursales, setNumeroSucursales] = useState(cantidadSucursales);
  const [sucursales, setSucursales] = useState(sucursales2);
  const [comuna, setComuna] = useState(comunaSucursal);
  const [listaComunas, setListaComunas] = useState([]);
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getComuna(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    var variables = []
    sucursalesEmpresa.forEach((sucursal,i) =>{
      variables.push({id: i,codigo_region: sucursal.codigo_region,codigo_comuna:sucursal.id_comuna, nombre: sucursal.comuna})
    })

    var uniqueArray = removeDuplicates(variables, "nombre");
    uniqueArray.sort((a,b) => a.nombre < b.nombre ? -1 : +(a.nombre > b.nombre));
    console.log("uniqueArray is: " + JSON.stringify(uniqueArray));    

    setListaComunas(uniqueArray);

    // eslint-disable-next-line
  }, [comunaList]);

  const removeDuplicates = (originalArray, prop) =>{
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  console.log(listaComunas);
  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.4))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Identifica
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;la comuna de la sucursal
          </Grid>                  
          &nbsp;en donde trabaja
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div> 
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Comuna
          </Typography>
          <AutoComplete
            value={comuna}
            onChange={(event, value) => {
              console.log({ value });
              const sucursalesComuna = sucursalesEmpresa.filter(
                (x) =>
                  x.id_comuna === value?.codigo_comuna &&
                  parseInt(value?.codigo_region) === parseInt(x?.codigo_region)
              );

              console.log({ sucursalesComuna, cantidad: sucursalesComuna.length });
              setNumeroSucursales(sucursalesComuna.length);
              setSucursales(sucursalesComuna);
              setComuna(value);
            }}
            size="small"
            fullWidth
            options={listaComunas}
            getOptionLabel={(option) => option.nombre}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
          />
          <div className={spaceStyle.space2} />
          {numeroSucursales === 1 ? (
            <CardSucursal sucursales={sucursales[0]} />
          ) : null}
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={!comuna}
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
                dispatch(
                  updateForm("sucursalCargo", sucursales[0].sucursalCargo)
                );
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

export default SeleccionarComuna;
