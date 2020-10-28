import React from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { Typography } from "@material-ui/core";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomSucursalItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSucursalItem";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";


const SeleccionarSucursalTrabajo = ({ sucursalesEmpresa }) => {
  const dispatch = useDispatch();

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { percentage, SucursalEmpresa: SucursalEmpresaObjeto } = useSelector(
    (state) => state.addmissionForm, shallowEqual);

  const comunClass = getComunStyle();

  const handlerGuradarSucursalTexto = (itemForm, data, step) => {
    const { nombre, direccion, codigo, sucursalCargo } = data;
    const sucursalTexto = nombre;
    dispatch(updateForm(itemForm, sucursalTexto));
    dispatch(updateForm("DireccionEmpresa", direccion));
    dispatch(updateForm("codigoSucursal", codigo));
    dispatch(updateForm("sucursalCargo", sucursalCargo));
  };
  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.4))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Identifica
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
              &nbsp;la sucursal 
          </Grid>         
          &nbsp;en donde trabaja
        </Typography>
        <div className={comunClass.displayDeskInline}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/identify.svg" />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {sucursalesEmpresa.map((sucursal, index) => (
            <BotonSeleccionarCustom
              key={index}
              data={sucursal}
              itemForm={"SucursalEmpresa"}
              selected={sucursal.codigo === SucursalEmpresaObjeto.codigo}
              step={5.1}
              handlerGuardarData={handlerGuradarSucursalTexto}
            >
              <BotonSeleccionarCustomSucursalItem {...sucursal} />
            </BotonSeleccionarCustom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeleccionarSucursalTrabajo;
