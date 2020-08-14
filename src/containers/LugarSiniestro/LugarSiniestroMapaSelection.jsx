import React, { useState, useEffect } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography, TextField } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import Mapa from '../../components/share/DireccionGeo/Mapa'

const LugarSiniestroMapaSelection = () => {

  const [direccion, setDireccion]=useState(null)
  const [placeId, setPlaceId]=useState(null)
  const [mapa, setMapa]=useState(null)

  const dispatch = useDispatch()

  const {
    addmissionForm: {  percentage },
  } = useSelector((state) => state, shallowEqual)


  useEffect(()=>{
      getLocation()
  },[])

  const [coords, setCoords]= useState(null)

  const getLocation = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    // {maximumAge:60000, timeout:5000, enableHighAccuracy:true}

    navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log("coords")
          console.log(position.coords)
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        },
        function(error) {
             console.error("Error Code = " + error.code + " - " + error.message);
             setCoords({
              latitude: 'notset',
              longitude: 'notset',
            })
        },
        options
    );
  }

  const comun = getComunStyle()

  const handleSelect = async() => {
    // console.log(direccion)
    // console.log(placeId)
    googleMapsGetMap(placeId)
    dispatch(updateForm("sucursalEmpresaSiniestro", 
    {
      description: direccion,
      place_id: placeId, 
      reference: placeId, 
      structured_formatting:{
        main_text: direccion.split(',')[0],
        secondary_text: direccion.split(',')[1]+', '+direccion.split(',')[2]
      },
      types: [
        "street_address",
        "geocode" 
      ]
    }
    ))

    dispatch(handleSetStep(11))
   
  }

  const googleMapsGetMap = async(placeId) => {
    if(placeId){
      console.log("place")
      let urlMapa =  `https://wa-desa-msorquestador.azurewebsites.net/api/geo/getMapaEstatico?id=${placeId}&size=300x280`
      dispatch(updateForm("urlMapasucursalEmpresaSiniestro", urlMapa))
    }else{
      console.log("no place")
    }
}


  return (
    <div className={comun.rootContainer}> 
      <Cabecera
        dispatch={() => dispatch(handleSetStep(11))}
        percentage={percentage}
        noSpace={true}
      />

        {coords ? (
               <Mapa 
                lat={coords.latitude}
                lng={coords.longitude}
                direccion={direccion}
                setDireccion={setDireccion}
                setPlaceId={setPlaceId}                
               />
        ) : (
           <Typography>Cargando....</Typography>
        )}


      <div className={comun.bottomElement} style={{padding: '0 20px 20px 20px'}}>
        <Button
          className={comun.buttonAchs}
          variant="contained"
          disabled={direccion ? false : true}
          onClick={() => {
            handleSelect()
          }}
        >
          Seleccionar dirección
        </Button>
      </div>
    </div>
  )
}
export default LugarSiniestroMapaSelection