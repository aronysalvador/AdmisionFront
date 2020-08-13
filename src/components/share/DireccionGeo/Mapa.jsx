import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px'
};

const Mapa = (props) => {

    const onMarkerClick = () => {
        console.log("click")
    }

    return(
        <div>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: props.lat,
                    lng: props.lng
                }}
            >
                <Marker
                    onClick={()=>onMarkerClick()}
                    name={'This is test name'}
                />
            </Map>
        </div> 
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7A81JqF6R2b0lZ2SAAlR1jYRfNZNm-wM'
})(Mapa);