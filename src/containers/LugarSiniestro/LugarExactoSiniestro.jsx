import React, { useState } from "react"
import { getComunStyle } from "../../css/comun"
import { getSpaceStyle } from "../../css/spaceStyle";
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccionSN,validarDireccionCorrecta } from './../../helpers/utils'
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const LugarExactoSiniestro = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro, tipoSiniestro, DireccionEmpresa },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const [sucursal, setSucursal] = useState(() => {
    return sucursalEmpresaSiniestro ? sucursalEmpresaSiniestro : "";
  });
  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapasucursalEmpresaSiniestro ? urlMapasucursalEmpresaSiniestro : "";
  });
  const [nombreComuna,setNombreComuna]=useState("");

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const clearData = () => {
    dispatch(updateForm("sucursalEmpresaSiniestro", ""))
    dispatch(updateForm("urlMapasucursalEmpresaSiniestro", ""))
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
    const resultado = await validarDireccionSN(sucursal)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
  }

  // React.useEffect(()=>{
  //       if(DireccionEmpresa){
  //         const result = validarDireccionCorrecta(DireccionEmpresa)
  //         console.log("validacion: "+result)
  //       }
  //    // eslint-disable-next-line
  // },[])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(step - 1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]} style={{paddingBottom:'20px'}}>
          Indica la dirección 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;en donde ocurrió el accidente
          </Grid>          
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src={image} className={comunClass.imgPrimaryWidth}/>
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Dirección accidente
          </Typography>

        
            <DireccionGeo
              comunStyle={getComunStyle()}
              direccion={sucursal} 
              setMapa={setMapaUrl} 
              setDireccion={setSucursal} 
              clearData={clearData}
              showDinamicMap={()=> {
                setSucursal({description: ''}); 
                dispatch(handleSetStep(11.1))
              }}
              direccionTemporal={(tipoSiniestro.Id===1 && !sucursalEmpresaSiniestro && validarDireccionCorrecta(DireccionEmpresa))?DireccionEmpresa:""}
            />
            <center>
              {(mapaUrl)?
              <img alt="MapaSiniestro" className={comunClass.googleMap}  src={mapaUrl} />
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
              dispatch(updateForm("sucursalEmpresaSiniestro", sucursal))
              dispatch(updateForm("urlMapasucursalEmpresaSiniestro", mapaUrl))
              dispatch(updateForm("comunaSiniestro", nombreComuna))
              dispatch(handleSetStep(step + 1))
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
export default LugarExactoSiniestro;