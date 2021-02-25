import { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Typography } from "@material-ui/core"

const mapStyles = {
  width: '100%',
  height: '350px'
};

const Mapa = (props) => {
    const lat = props.LatTemporal ? props.LatTemporal : (props.lat !== 'notset' ? props.lat : -33.436868834634076);
    const lng = props.LongTemporal ? props.LongTemporal : (props.lng !== 'notset' ? props.lng : -70.63447665106504);
    const { direccion, setDireccion, setPlaceId } = props
    const { LatTemporal, LongTemporal, DireccionTemporal } = props

    const lookForDirection = async(lat, lng) => {
        if (lat && lng){
            // const test = await fetch(`http://localhost:8080/api/googleMaps/getDireccion?lat=${lat}&lng=${lng}`)
            const test = await fetch(`${window.REACT_APP_GEO_DIRECTION}?lat=${lat}&lng=${lng}`)
            const json = await test.json()
            if (json){
                setDireccion(json.content[0].results[0].formatted_address)
                setPlaceId(json.content[0].results[0].place_id)
            }
        }
    }

    // useEffect((lat,lng, lookForDirection, LatTemporal, LongTemporal, DireccionTemporal, setDireccion, setPlaceId)=>{
    useEffect(() => {
        if (LatTemporal && LongTemporal){
            setDireccion(DireccionTemporal.description)
            setPlaceId(DireccionTemporal.place_id)
        } else {
            lookForDirection(lat, lng)
        }
        // eslint-disable-next-line
    },[])

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
                initialCenter={{
                    lat,
                    lng
                }}
            >
                <Marker
                    name={'Marker'}
                    draggable
                    onDragend={(t, map, coord) => onMarkerDragEnd(coord)}
                />
            </Map>

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

        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: window.GOOGLE_MAPS_API_KEY
})(Mapa);
