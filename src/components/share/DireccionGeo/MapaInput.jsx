import { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Typography } from "@material-ui/core"
import Lugar from "../../../containers/LugarSiniestroTrayecto/Lugar"

const mapStyles = {
  width: '100%',
  height: '350px'
};

const Mapa = (props) => {
    const lat = (props.lat !== 'notset' ? props.lat : -33.436868834634076);
    const lng = (props.lng !== 'notset' ? props.lng : -70.63447665106504);
    const { direccion, setDireccion, setPlaceId } = props
    const { LatTemporal, LongTemporal, DireccionTemporal, disabledDirection, showInput, setCoords, direccionValida, setDireccionValida, DireccionEmpresa, sucursalEmpresaSiniestro } = props

    const [ sucursal, setSucursal ] = useState("");
    const [ mapaUrl, setMapaUrl ] = useState("");
    const [ nombreComuna, setNombreComuna ]=useState("");

    const clearData = () => {
        setSucursal("")
        setDireccion("")
    }

    const lookForDirection = async(lat, lng) => {
        if (lat && lng){
            const test = await fetch(`${window.REACT_APP_GEO_DIRECTION}?lat=${lat}&lng=${lng}`)
            const json = await test.json()
            if (json){
                json.content[0].results[0].description = json.content[0].results[0].formatted_address
                setSucursal(json.content[0].results[0])
            }
        }
    }

    useEffect(() => {
        if (LatTemporal && LongTemporal)
            setSucursal(DireccionTemporal)
        else
            lookForDirection(lat, lng)

        // eslint-disable-next-line
    },[])
    useEffect(() => {
        if (sucursal)
            handleDinamic(sucursal)

        // eslint-disable-next-line
    },[sucursal])

    const handleDinamic = async(direccion) => {
        if (direccion){
          const test = await fetch(`${window.REACT_APP_GEO_LATLNG}?id=${direccion.place_id}`)
          const json = await test.json()
          if (Array.isArray(json.content)){
                setDireccion(direccion.description)
                setPlaceId(direccion.place_id)
                setCoords({
                    latitude: json.content[0].result.geometry.location.lat,
                    longitude: json.content[0].result.geometry.location.lng
                })
          }
        }
      }

    const onMarkerDragEnd = (coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        if (lat && lng)
            lookForDirection(lat, lng)
    };

    return (
        <div>
            <Map
                google={props.google}
                zoom={16}
                style={mapStyles}
                center={{
                    lat,
                    lng
                }}
            >
                <Marker
                    position={{
                        lat,
                        lng
                    }}
                    name={'Marker'}
                    draggable
                    onDragend={(t, map, coord) => onMarkerDragEnd(coord)}
                />
            </Map>

            {!disabledDirection && (
            <div style={{
                    position: "absolute",
                    right: "0",
                    left: "0",
                    bottom: "8.5em"
            }}
            >
                <Typography style={{
                    fontFamily: 'Catamaran',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    textAlign: 'center'}}
                >{direccion ? direccion.split(',')[0] : null}
                </Typography>
                <Typography style={{
                       fontFamily: 'Catamaran',
                       fontStyle: 'normal',
                       fontWeight: '600',
                       fontSize: '14px',
                    textAlign: 'center'}}
                >{direccion ? direccion.split(',')[1]+', '+direccion.split(',')[2] : null}
                </Typography>
            </div>
            )}

            {showInput && (
                 <div style={{
                    position: "absolute",
                    right: "0",
                    left: "0",
                    bottom: "8.5em"
                    }}
                 >
                        <div className='container' style={{maxWidth: "30em"}}>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <Lugar
                                        sucursal={sucursal}
                                        setSucursal={setSucursal}
                                        mapaUrl={mapaUrl}
                                        setMapaUrl={setMapaUrl}
                                        nombreComuna={nombreComuna}
                                        setNombreComuna={setNombreComuna}
                                        valido={direccionValida}
                                        setValido={setDireccionValida}
                                        DireccionEmpresa={DireccionEmpresa}
                                        sucursalEmpresaSiniestro={DireccionTemporal ? DireccionTemporal : sucursalEmpresaSiniestro}
                                        clearData={clearData}
                                        noFijarOption
                                    />
                                </div>
                            </div>
                        </div>
                 </div>
            )}

        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7A81JqF6R2b0lZ2SAAlR1jYRfNZNm-wM'
})(Mapa);