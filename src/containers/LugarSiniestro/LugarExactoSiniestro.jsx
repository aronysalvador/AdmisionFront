import React, { useState } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import { getData } from "../../redux/actions/ComunaAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { eliminarDiacriticos } from './../../helpers/utils'

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
    setNombreComuna("")
      console.log(sucursal)
      if(typeof sucursal.description === 'string'){
        const fragmentos  = sucursal.description.split(",")
        console.log(fragmentos)
          if(Array.isArray(fragmentos) && fragmentos.length >= 3 && fragmentos[0].match(/\d+/g) ){
            console.log("direccion contiene numero ....")
            const result = await getData()
              if(result.status === 200){
                var COMUNAS = result.data.content[0]
                  if(Array.isArray(COMUNAS)){           
                        var comuna = fragmentos[fragmentos.length-2].toUpperCase().trim()                                             
                        if(comuna.includes("REGIÓN")){
                          comuna = fragmentos[1].toUpperCase().trim()
                        }
                        console.log("validando comuna: "+comuna) 

                        var resultValid = COMUNAS.find(ele => eliminarDiacriticos(ele.nombre) === eliminarDiacriticos(comuna))
                        console.log(resultValid) 
                        if( resultValid !== undefined  ){
                          console.log("comuna: "+comuna+" valida")
                          setNombreComuna(comuna)
                          setValido( true )
                        }else{
                          setValido( false )
                        }
                  }else{
                    setValido( false )
                  }
              }else{
                setValido( false )
              }
          }else{
            setValido( false )
          }
      }else{
        setValido( false )
      }    
  }

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />

      <Typography className={titleBlack} style={{paddingBottom:'20px'}}>
        Indica la dirección <span className={titleBlue}> en donde ocurrió el accidente </span>
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