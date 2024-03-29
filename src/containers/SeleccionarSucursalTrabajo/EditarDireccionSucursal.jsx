import { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import AutoComplete from "@material-ui/lab/Autocomplete";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const EditarDireccionSucursal = () => {
  const {
    addmissionForm: { percentage, sucursales, SucursalEmpresaObjeto }
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const [ sucursalEmpresa, setSucursalEmpresa ] = useState(SucursalEmpresaObjeto);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"EditarDireccionSucursal-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.5))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
          Identifica
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;la dirección de la sucursal
          </Grid>
          &nbsp;en donde trabaja
        </Grid>
        <div className={comunClass.displayDeskInline}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={spaceStyle.space2} />
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextbox}>
            Dirección
          </Typography>
          <AutoComplete
            id={"EditarDireccionSucursal-Lbl1"}
            value={sucursalEmpresa}
            onChange={(event, value) => {
              setSucursalEmpresa(value);
            }}
            size='small'
            fullWidth
            options={sucursales}
            getOptionLabel={(option) => option?.direccion}
            renderInput={(params) => <TextField {...params} variant='outlined' />}
          />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"EditarDireccionSucursal-Btn1"}
            variant='contained'
            disabled={sucursalEmpresa===null || Object.keys(sucursalEmpresa).length === 0}
            className={comunClass.buttonAchs}
            onClick={() => {
              dispatch(updateForm("SucursalEmpresa", sucursalEmpresa.nombre));
              dispatch(updateForm("SucursalEmpresaObjeto", sucursalEmpresa));
              dispatch(updateForm("DireccionEmpresa", sucursalEmpresa.direccion));
              dispatch(updateForm("comunaEmpresa", sucursalEmpresa.comuna));
              dispatch(updateForm("codigoSucursal", sucursalEmpresa.codigo));
              dispatch(updateForm("sucursalCargo", sucursalEmpresa.sucursalCargo));
              dispatch(handleSetStep(5.1));
            }}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditarDireccionSucursal;
