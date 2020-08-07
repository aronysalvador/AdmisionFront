import React, { useState, useEffect } from "react";
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
  const { step, percentage, comunaSucursal, rutEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getComuna(""));
  }, []);

  const { data: comunaList } = useSelector(
    (state) => state.comunaForm,
    shallowEqual
  );

  const [numeroSucursales, setNumeroSucursales] = useState(0);
  const [sucursales, setSucursales] = useState([]);
  const [comuna, setComuna] = useState(comunaSucursal);
  const [listaComunas, setListaComunas] = useState([]);
  const dispatch = useDispatch();
  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  useEffect(() => {
    /*const comunasSucursal = sucursalesEmpresa.map((sucursal) =>
      comunaList.find((x) => x.codigo_comuna === sucursal.id_comuna)
    );*/

    const comunasSucursal = []
    for(let i = 0  ; i < sucursalesEmpresa.length; i++){
      for(let j = 0 ; j < comunaList.length; j ++){
        if(comunaList[j].codigo_comuna === sucursalesEmpresa[i].id_comuna){
          comunasSucursal.push(comunaList[j])
        }
      }
    }
    setListaComunas(comunasSucursal);
    console.log({ sucursalesEmpresa, comunaList, xx: comunasSucursal });
  }, [sucursalesEmpresa, comunaList]);

  


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
          const sucursalesComuna = sucursalesEmpresa.filter(
            (x) => x.id_comuna == value?.codigo_comuna
          );
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
      {numeroSucursales === 1 ? <CardSucursal /> : null}
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
              dispatch(updateForm("SucursalEmpresa", sucursales[0]));
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
