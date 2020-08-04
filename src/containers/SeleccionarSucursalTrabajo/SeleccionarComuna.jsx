import React, { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Typography, TextField, Button } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import CardSucursal from "../../components/CardSucursal/CardSucursal";
import { sucursalesOficina } from "../../util/fakeApi";

const SeleccionarComuna = () => {
  const comunas = [
    { key: 13101, value: "Santiago Centro", parent: 13000 },
    { key: 13102, value: "Cerrillos", parent: 13000 },
    { key: 13103, value: "Cerro Navia", parent: 13000 },
    { key: 13104, value: "Conchalí", parent: 13000 },
    { key: 13105, value: "El Bosque", parent: 13000 },
    { key: 13106, value: "Estación Central", parent: 13000 },
    { key: 13107, value: "Huechuraba", parent: 13000 },
    { key: 13108, value: "Independencia", parent: 13000 },
    { key: 13109, value: "La Cisterna", parent: 13000 },
    { key: 13110, value: "La Florida", parent: 13000 },
    { key: 13111, value: "La Granja", parent: 13000 },
    { key: 13112, value: "La Pintana", parent: 13000 },
  ];
  const [numeroSucursales, setNumeroSucursales] = useState(0);
  const [sucursales, setSucursales] = useState([]);
  const [comuna, setComuna] = useState(null);
  const dispatch = useDispatch();
  const {
    buttonAchs,
    root,
    pregunta,
    bottomElement,
    tituloTextbox,
  } = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { step, percentage } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  let stepx = step;
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
        onChange={(event, value) => {
          const sucursalesComuna = sucursalesOficina.filter(
            (x) => x.key == value?.key
          );
          setNumeroSucursales(sucursalesComuna.length);
          setSucursales(sucursalesComuna);
          setComuna(value);
          console.log({ value, sucursalesComuna });
        }}
        size="small"
        fullWidth
        options={comunas}
        getOptionLabel={(option) => option.value}
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
