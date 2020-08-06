import React, { useState} from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography, TextField } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import { getSpaceStyle } from "../../css/spaceStyle"
import DireccionGeo from '../../components/share/DireccionGeo'

const LugarExactoSiniestro = () => {
  const {
    addmissionForm: { step, percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro },
  } = useSelector((state) => state, shallowEqual)

  const [sucursal, setSucursal] = useState(() => {
    return !sucursalEmpresaSiniestro ? "" : sucursalEmpresaSiniestro
  })
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

  const setUrl = (urlMapa) =>{
    dispatch(updateForm("urlMapasucursalEmpresaSiniestro", urlMapa))
  }

  const [isLugarExactoAccidenteValid, setLugarExactoAccidente] = useState(true)

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(step - 1))}
        percentage={percentage}
      />
      <Typography className={pregunta}>
        Señala el lugar exacto del accidente
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography className={tituloTextbox} variant="subtitle2">
        Dirección accidente
      </Typography>

      <DireccionGeo direccion={sucursal} setUrl={setUrl} setDireccion={setSucursal} />
      {(sucursal !== null)?<img className={googleMap}  src={urlMapasucursalEmpresaSiniestro} />:<div />}

      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
          disabled={!sucursal || !isLugarExactoAccidenteValid}
          onClick={() => {
            dispatch(updateForm("sucursalEmpresaSiniestro", sucursal))
            dispatch(handleSetStep(step + 1))
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}
export default LugarExactoSiniestro