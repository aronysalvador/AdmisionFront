import React from "react";
import TabCompany from "../../components/EditCompany/TabCompany";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getSucursales } from "../../redux/actions/SucursalesAction";

const EditCompany = () => {
  const spaceStyle = getSpaceStyle();

  const { percentage, razonSocial, rutEmpresa } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );

  const { buttonAchs, root, bottomElement, titleBlack, titleBlue } = getComunStyle();
  const dispatch = useDispatch();

  const { sucursalesForm: {loading, data: sucursalesList} } = useSelector((state) => state, shallowEqual);

    const [cargando, setCargando]= React.useState(false)

  const handleNext= async() => {
    setCargando(true)
   await dispatch(getSucursales(rutEmpresa)); 

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
  },[loading])


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
      Identifica la empresa en la que trabaja con su 
      <div className={titleBlue}>
        &nbsp;razón social o RUT
      </div>
      </Typography>
      <div className={spaceStyle.space2} />

      <TabCompany />

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
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
  );
};

export default EditCompany;
