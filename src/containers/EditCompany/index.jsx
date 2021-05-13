import { useState, useEffect } from "react";
import TabCompany from "../../components/EditCompany/TabCompany";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getSucursales } from "../../redux/actions/SucursalesAction";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const EditCompany = () => {
  const { percentage, razonSocial, rutEmpresa, creacionBP } = useSelector(
    (state) => state.addmissionForm, shallowEqual);

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const { sucursalesForm: {loading, data: sucursalesList} } = useSelector((state) => state, shallowEqual);

  const [ cargando, setCargando ]= useState(false);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  const handleNext= async() => {
    setCargando(true)
    if (sucursalesList.length===0) await dispatch(getSucursales(rutEmpresa));
  }

  useEffect(() => {
    if (cargando){
      if (!loading){
        if (sucursalesList.length>0){
          if (sucursalesList.length>1){
            dispatch(handleSetStep(5.5))
          } else {
            const data = sucursalesList[0];
            const { nombre, direccion, comuna, codigo, sucursalCargo } = data;
            dispatch(updateForm("sucursales", sucursalesList));
            dispatch(updateForm("SucursalEmpresaObjeto", data));
            dispatch(updateForm("SucursalEmpresa", nombre));
            dispatch(updateForm("DireccionEmpresa", direccion));
            dispatch(updateForm("codigoSucursal", codigo));
            dispatch(updateForm("comunaEmpresa", comuna))
            dispatch(updateForm("sucursalCargo", sucursalCargo));
            dispatch(updateForm("cantidadSucursales", 1));
            dispatch(updateForm("comunaSucursal", comuna));
            creacionBP ? dispatch(handleSetStep(5.7)) : dispatch(handleSetStep(5.1));
          }
        } else {
          dispatch(handleSetStep(5.14))
        }
      }
    }
    // eslint-disable-next-line
  },[cargando, loading])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"EditCompany-BtnBack"}
          dispatch={() => (creacionBP ? dispatch(handleSetStep(5.31)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
          Identifica la empresa en la que trabaja con su
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;razón social o RUT
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
        <div className={spaceStyle.space2} />
      </div>
        <TabCompany />

        <div className={comunClass.bottomElement}>
          <Button
            id={"EditCompany-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            type='submit'
            disabled={!razonSocial || !rutEmpresa || cargando}
            onClick={() => {
              handleNext()
            }}
          >
            Confirmar Empresa
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default EditCompany;
