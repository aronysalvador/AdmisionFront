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

const SeleccionarComuna = ({ sucursalesEmpresa }) => {
  const {
    percentage,
    comunaSucursal,
    cantidadSucursales,
    sucursales: sucursales2,
  } = useSelector((state) => state.addmissionForm, shallowEqual);

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

  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    const comunasSucursal = sucursalesEmpresa.map((sucursal) =>
      comunaList.find((x) => x.codigo_comuna === sucursal.id_comuna)
    );
    console.log({ sucursalesEmpresa, comunasSucursal });
    // const comunasSucursal = [];
    // for (let i = 0; i < sucursalesEmpresa.length; i++) {
    //   for (let j = 0; j < comunaList.length; j++) {
    //     if (comunaList[j].codigo_comuna === sucursalesEmpresa[i].id_comuna) {
    //       comunasSucursal.push(comunaList[j]);
    //     }
    //   }
    // }
    // const uniqueAddresses = Array.from(
    //   new Set(comunasSucursal.map((a) => a.id))
    // ).map((id) => {
    //   return comunasSucursal.find((a) => a.id === id);
    // });

    // console.log({ uniqueAddresses });
    setListaComunas(comunasSucursal);
  }, [comunaList]);

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.4))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Selecciona la comuna en donde trabajas
      </Typography>
      <div className={spaceStyle.space2}></div>
      <Typography className={tituloTextbox} variant="subtitle2">
        Comuna
      </Typography>
      <AutoComplete
        value={comuna}
        onChange={(event, value) => {
          console.log({ value });
          const sucursalesComuna = sucursalesEmpresa.filter(
            (x) => x.id_comuna === value?.codigo_comuna
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
      <div className={spaceStyle.space2}></div>
      {numeroSucursales === 1 ? (
        <CardSucursal sucursales={sucursales[0]} />
      ) : null}
      <div className={bottomElement}>
        <Button
          className={buttonAchs}
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
              dispatch(handleSetStep(5.1));
            }
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default SeleccionarComuna;
