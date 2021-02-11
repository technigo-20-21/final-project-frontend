import React, { useState } from 'react';
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { MAPBOX_URL } from "../urls";

export const Map = ({ position }) => {

    return (
      <>
      {position && 
        <MapContainer center={position.coordinates} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox'
          url={MAPBOX_URL}
        />
        <Marker position={position.coordinates}>
          <Popup>HEJ TORSLANDA
          </Popup>
        </Marker>
      </MapContainer>}
      </>
    )
}