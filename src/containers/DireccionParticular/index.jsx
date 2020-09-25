import React, { useState} from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import { getData } from "../../redux/actions/ComunaAction"
import { getSpaceStyle } from "../../css/spaceStyle"
import DireccionGeo from '../../components/share/DireccionGeo'
import { eliminarDiacriticos } from './../../helpers/utils'
import Grid from '@material-ui/core/Grid';

const DireccionParticular = () => {
  const {
    addmissionForm: { percentage, urlMapaDireccionParticular,direccionParticularObj },
  } = useSelector((state) => state, shallowEqual)

  const [direccion, setDireccion] = useState(() => {
    return !direccionParticularObj ? "" : direccionParticularObj
  })

  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapaDireccionParticular ? urlMapaDireccionParticular : ""
  })

  const [nombreComuna,setNombreComuna]=useState("")

  const clearData = () => {
    dispatch(updateForm("direccionParticularObj", ""))
    dispatch(updateForm("urlMapaDireccionParticular", ""))
  }

  const dispatch = useDispatch()

  const {
    root,
    buttonAchs,
    tituloTextbox,
    bottomElement,
    titleBlue,
    titleBlack
  } = getComunStyle()
  const spaceStyle = getSpaceStyle()
  const { googleMap } = getComunStyle()
  

  const [valido, setValido] = useState(false)
  React.useEffect(()=>{
    if(direccion){
      validaDireccion(direccion)      
    }else{
      setValido( false )
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[direccion])

  const validaDireccion = async()=>{
    setNombreComuna("")
      console.log(direccion)
      if(typeof direccion.description === 'string'){
        const fragmentos  = direccion.description.split(",")
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
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Ingresa
        <Grid component="span"  className={titleBlue}>
          &nbsp;la dirección en donde vive el paciente
        </Grid>                  
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        Dirección particular
      </Typography>

      <DireccionGeo       
        comunStyle={getComunStyle()}
        direccion={direccion} 
        setMapa={setMapaUrl} 
        setDireccion={setDireccion} 
        clearData={clearData}
        showDinamicMap={()=> {
          setDireccion({description: ''}); 
          dispatch(handleSetStep(5.21))
        }}
      />
      {(mapaUrl)?
      <img alt="MapaDireccionParticular" className={googleMap}  src={mapaUrl} />
      :null}

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={!valido}
          onClick={() => {
            dispatch(updateForm("direccionParticular", direccion.description))
            dispatch(updateForm("direccionParticularObj", direccion))
            dispatch(updateForm("comunaDireccionParticular", nombreComuna))
            dispatch(handleSetStep(5.1))
          }}
        >
          Guardar dirección
        </Button>
      </div>
    </div>
  )
}
export default DireccionParticular