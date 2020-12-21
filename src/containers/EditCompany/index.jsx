import React from "react";
import TabCompany from "../../components/EditCompany/TabCompany";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
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

  const [cargando, setCargando]= React.useState(false);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  const handleNext= async() => {
    setCargando(true)
    if(sucursalesList.length===0) await dispatch(getSucursales(rutEmpresa));
  }

  React.useEffect(()=>{
    if(cargando){
      if(!loading){
        if(sucursalesList.length>0){
            dispatch(handleSetStep(5.5))
        }else{
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
          dispatch={() => (creacionBP ? dispatch(handleSetStep(5.813)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Identifica la empresa en la que trabaja con su
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;razón social o RUT
          </Grid>      
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
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
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
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
