import { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun"
import { getSpaceStyle } from "../../css/spaceStyle";
import { Button, Typography } from "@material-ui/core"
import Cabecera from "../../components/cabecera/index"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction"
import Mapa from '../../components/share/DireccionGeo/MapaInput';
import Header from "../../components/header/index";

const LugarSiniestroTrayectoMapa = () => {
  const [ direccion, setDireccion ]=useState(null);
  const [ direccionValida, setDireccionValida ] = useState(false)
  const [ placeId, setPlaceId ]=useState(null);
  const [ coords, setCoords ]= useState(null);
  const dispatch = useDispatch();
  const {
    addmissionForm: { percentage, DireccionTemporal, LatTemporal, LongTemporal, sucursalEmpresaSiniestro, DireccionEmpresa },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
      getLocation()
  }, [])

  const getLocation = () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    // {maximumAge:60000, timeout:5000, enableHighAccuracy:true}

    navigator.geolocation.getCurrentPosition(
        function(position) {
            setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        },
        function() {
            setCoords({
            latitude: 'notset',
            longitude: 'notset'
          })
        },
        options
    );
  };

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleSelect = async() => {
    let address = direccion ? direccion.split(',') : "";
    googleMapsGetMap(placeId)
    dispatch(updateForm("sucursalEmpresaSiniestro",
    {
      description: direccion,
      place_id: placeId,
      reference: placeId,
      structured_formatting: {
        main_text: address.length>0 ? address[0] : "",
        secondary_text: address.length>0 ? address[1]+', '+address[2] : ""
      },
      types: [
        "street_address",
        "geocode"
      ]
    }
    ))
    dispatch(handleSetStep(10.1))
  };

  const googleMapsGetMap = async(placeId) => {
    if (placeId){
      let urlMapa = `${window.REACT_APP_GEO_STATICMAP}?id=${placeId}&size=300x280`
      dispatch(updateForm("urlMapasucursalEmpresaSiniestro", urlMapa))
    }
  };

  return (
    <div className={comunClass.rootContainer}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <div style={{padding: '0.5em'}}>
          <Cabecera
            id={"LugarSiniestroTrayectoMapa-BtnBack"}
            dispatch={() => dispatch(handleSetStep(10.1))}
            percentage={percentage}
            noSpace
          />
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.spaceMin1} />
      </div>
      <div className={comunClass.boxDeskMap}>
        <div>
          {coords ? (
                <Mapa
                    lat={coords.latitude}
                    lng={coords.longitude}
                    setCoords={setCoords}
                    direccion={direccion}
                    setDireccion={setDireccion}
                    setPlaceId={setPlaceId}
                    DireccionTemporal={DireccionTemporal}
                    LatTemporal={LatTemporal}
                    LongTemporal={LongTemporal}
                    direccionValida={direccionValida}
                    setDireccionValida={setDireccionValida}
                    sucursalEmpresaSiniestro={sucursalEmpresaSiniestro}
                    DireccionEmpresa={DireccionEmpresa}
                    disabledDirection
                    showInput
                />
          ) : (
            <Typography>Cargando....</Typography>
          )}
        </div>
        <div className={comunClass.bottomElementMap} style={{padding: '0 20px 20px 20px'}}>
          <Button
            id={"LugarSiniestroTrayectoMapa-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={!direccionValida}
            onClick={() => {
              handleSelect()
            }}
          >
            Seleccionar dirección
          </Button>
        </div>
      </div>
    </div>
  )
}
export default LugarSiniestroTrayectoMapa;