import React, { useState} from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import { getSpaceStyle } from "../../css/spaceStyle"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccion  } from './../../helpers/utils'

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
    const resultado = await validarDireccion(direccion)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
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