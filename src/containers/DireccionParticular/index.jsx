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
    addmissionForm: { step, percentage, direccionParticular,urlMapaDireccionParticular },
  } = useSelector((state) => state, shallowEqual)

  const [direccion, setDireccion] = useState(() => {
    return !direccionParticular ? "" : direccionParticular
  })

  const setUrl = (urlMapa) =>{
    dispatch(updateForm("urlMapaDireccionParticular", urlMapa))
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



  const [isLugarExactoAccidenteValid, setLugarExactoAccidente] = useState(true)

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Ingresa tu dirección particular
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        Dirección particular
      </Typography>

      <DireccionGeo direccion={direccion} setUrl={setUrl} setDireccion={setDireccion} />
      {(direccion !== null)?<img src={urlMapaDireccionParticular} />:<div />}

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={!direccion || !isLugarExactoAccidenteValid}
          onClick={() => {
            dispatch(updateForm("direccionParticular", direccion))
            dispatch(handleSetStep(step + 1))
          }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  )
}
export default DireccionParticular