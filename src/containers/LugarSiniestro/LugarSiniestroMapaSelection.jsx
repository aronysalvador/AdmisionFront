import React, { useState, useEffect } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography, TextField } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'

const LugarSiniestroMapaSelection = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
      getLocation()
  },[])

  const [coords, setCoords]= useState()

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        },
        function(error) {
             console.error("Error Code = " + error.code + " - " + error.message);
        }
    );
  }

  const {
    root,
    buttonAchs,   
    bottomElement,
  } = getComunStyle()


  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(11))}
        percentage={-1}
      />


      <div className={bottomElement}>
        <Button
          className={buttonAchs}
          variant="contained"
        //   disabled={!sucursal || !isLugarExactoAccidenteValid}
          onClick={() => {
          console.log("select")
          }}
        >
          Seleccionar dirección
        </Button>
      </div>
    </div>
  )
}
export default LugarSiniestroMapaSelection