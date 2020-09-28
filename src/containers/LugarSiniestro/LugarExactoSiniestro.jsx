import React, { useState } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccion } from './../../helpers/utils'

const LugarExactoSiniestro = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro },
  } = useSelector((state) => state, shallowEqual)

  const [sucursal, setSucursal] = useState(() => {
    return sucursalEmpresaSiniestro ? sucursalEmpresaSiniestro : ""
  })
  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapasucursalEmpresaSiniestro ? urlMapasucursalEmpresaSiniestro : ""
  })

  const [nombreComuna,setNombreComuna]=useState("")


  const dispatch = useDispatch()

  const {
    root,
    buttonAchs,   
    bottomElement,
    googleMap,
    titleBlack,
    titleBlue,
    tituloTextbox,
  } = getComunStyle()


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
    const resultado = await validarDireccion(sucursal)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
 }


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />

      <Typography className={titleBlack} style={{paddingBottom:'20px'}}>
        Indica la dirección 
        <Grid component="span"  className={titleBlue}>
              &nbsp;en donde ocurrió el accidente
        </Grid>          
      </Typography>


      <Typography className={tituloTextbox} variant="subtitle2">
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
        />
      {(mapaUrl)?
      <img alt="MapaSiniestro" className={googleMap}  src={mapaUrl} />
      :null}
 
     

      <div className={bottomElement}>
        

        <Button
          className={buttonAchs}
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
  )
}
export default LugarExactoSiniestro