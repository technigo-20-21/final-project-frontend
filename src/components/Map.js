import React from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MAPBOX_URL } from "../urls";
import { StyledPop } from "../library/MapStyles"
export const Map = ({ position, street, zip }) => {

    return (
      <>
      {position && 
        <MapContainer center={position.coordinates} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox'
          url={MAPBOX_URL}
        />
        <Marker position={position.coordinates}>
          <StyledPop> <p>{street}</p> <p>{zip}</p>
          </StyledPop>
        </Marker>
      </MapContainer>}
      </>
    )
}