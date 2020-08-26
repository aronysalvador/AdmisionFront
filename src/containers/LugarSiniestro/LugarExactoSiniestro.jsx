import React, { useState } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'

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

  const isLugarExactoAccidenteValid = true

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
          disabled={!sucursal || !isLugarExactoAccidenteValid}
          onClick={() => {
            dispatch(updateForm("sucursalEmpresaSiniestro", sucursal))
            dispatch(updateForm("urlMapasucursalEmpresaSiniestro", mapaUrl))
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