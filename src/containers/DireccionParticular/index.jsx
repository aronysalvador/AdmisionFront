import React, { useState} from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography, TextField } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import { getSpaceStyle } from "../../css/spaceStyle"
import DireccionGeo from '../../components/share/DireccionGeo'

const DireccionParticular = () => {
  const {
    addmissionForm: { step, percentage, urlMapaDireccionParticular,direccionParticularObj },
  } = useSelector((state) => state, shallowEqual)

  const [direccion, setDireccion] = useState(() => {
    return !direccionParticularObj ? "" : direccionParticularObj
  })

  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapaDireccionParticular ? urlMapaDireccionParticular : ""
  })

  const clearData = () => {
    dispatch(updateForm("direccionParticularObj", ""))
    dispatch(updateForm("urlMapaDireccionParticular", ""))
  }

  const dispatch = useDispatch()

  const {
    root,
    buttonAchs,
    pregunta,
    tituloTextbox,
    bottomElement,
  } = getComunStyle()
  const spaceStyle = getSpaceStyle()

  const { googleMap } = getComunStyle()

  const [isLugarExactoAccidenteValid, setLugarExactoAccidente] = useState(true)

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(5.1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Ingresa tu dirección particular
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
      {(mapaUrl !== null)?
      <img className={googleMap}  src={mapaUrl} />
      :null}

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={!direccion || !isLugarExactoAccidenteValid}
          onClick={() => {
            dispatch(updateForm("direccionParticular", direccion.description))
            dispatch(updateForm("direccionParticularObj", direccion))
            dispatch(handleSetStep(5.1))
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  )
}
export default DireccionParticular