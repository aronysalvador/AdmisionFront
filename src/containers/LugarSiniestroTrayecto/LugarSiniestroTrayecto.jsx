import React, { useState } from "react"
import { getComunStyle } from "../../css/comun"
import { getSpaceStyle } from "../../css/spaceStyle";
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccion } from '../../helpers/utils'
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const LugarSiniestroTrayecto = () => {
  const {
    addmissionForm: { percentage, sucursalEmpresaDiaSiniestroTrayecto, urlMapaSucursalDiaSiniestroTrayecto, DireccionEmpresa },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const [sucursal, setSucursal] = useState(() => {
    return sucursalEmpresaDiaSiniestroTrayecto ? sucursalEmpresaDiaSiniestroTrayecto : ""
  });
  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapaSucursalDiaSiniestroTrayecto ? urlMapaSucursalDiaSiniestroTrayecto : ""
  });
  const [nombreComuna,setNombreComuna]=useState("");

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const clearData = () => {
    dispatch(updateForm("sucursalEmpresaDiaSiniestroTrayecto", ""))
    dispatch(updateForm("urlMapaSucursalDiaSiniestroTrayecto", ""))
  }

  const [valido, setValido] = useState(false)
  React.useEffect(()=>{
    if(sucursal){
      validaDireccion(sucursal)      
    }else{
      setValido( false )
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[sucursal])
  
  const validaDireccion = async()=>{
    const resultado = await validarDireccion(sucursal)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
  }

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(12))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]} style={{paddingBottom:'20px'}}>
          Indica la dirección del
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;lugar de trabajo el día del accidente
          </Grid>          
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth}/>
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Dirección de trabajo
          </Typography>
          <DireccionGeo
            comunStyle={getComunStyle()}
            direccion={sucursal} 
            setMapa={setMapaUrl} 
            setDireccion={setSucursal} 
            clearData={clearData}
            showDinamicMap={()=> {
              setSucursal({description: ''}); 
              dispatch(handleSetStep(12.3))
            }}
            direccionTemporal={DireccionEmpresa}
          />
          <center>
            {(mapaUrl)?
            <img alt="MapaDiaSiniestro" className={comunClass.googleMap}  src={mapaUrl} />
            :null}
          </center>
        </div> 
        {/* <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space1} />
        </div> */}
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={!valido}
            onClick={() => {
              dispatch(updateForm("sucursalEmpresaDiaSiniestroTrayecto", sucursal))
              dispatch(updateForm("urlMapaSucursalDiaSiniestroTrayecto", mapaUrl))
              dispatch(updateForm("comunaDiaSiniestroTrayecto", nombreComuna))
              dispatch(handleSetStep(13))
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
  )
}
export default LugarSiniestroTrayecto;