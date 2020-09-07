import React, { useState, useEffect } from "react"
import { getComunStyle } from "../../css/comun"
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import Mapa from '../../components/share/DireccionGeo/Mapa'

const MapaSelection = () => {

  const [direccion, setDireccion]=useState(null)
  const [placeId, setPlaceId]=useState(null)

  const dispatch = useDispatch()

  const {
    addmissionForm: {  percentage, DireccionTemporal, LatTemporal, LongTemporal },
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

    googleMapsGetMap(placeId)
    dispatch(updateForm("direccionParticular", direccion))
    dispatch(updateForm("direccionParticularObj", 
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

    dispatch(handleSetStep(5.2))
   
  }

  const googleMapsGetMap = async(placeId) => {
    if(placeId){
      let urlMapa =  `${process.env.REACT_APP_GEO_STATICMAP}?id=${placeId}&size=300x280`
      dispatch(updateForm("urlMapaDireccionParticular", urlMapa))
    }else{
      console.log("no place")
    }
}


  return (
    <div className={comun.rootContainer}> 

      <div style={{padding: '0.5em'}}> 
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.2))}
          percentage={percentage}
          noSpace={true}
        />
      </div>

        {coords ? (
               <Mapa 
                  lat={coords.latitude}
                  lng={coords.longitude}
                  direccion={direccion}
                  setDireccion={setDireccion}
                  setPlaceId={setPlaceId}    
                  DireccionTemporal={DireccionTemporal}
                  LatTemporal={LatTemporal}     
                  LongTemporal={LongTemporal}   
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
export default MapaSelection