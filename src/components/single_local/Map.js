import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MAPBOX_URL } from "../../urls";
import { StyledPop } from "../../library/single_local_ui/MapStyles";

const defaultCoordinates = [57.72096, 11.76561]



export const Map = ({ position, name, street, zip }) => {

  const isCoordinates = position => {
    if (position.length < 0) {
      return true
    }
    return
  }

  return (
    <>
      {isCoordinates({ position }) 
        ? (
          <MapContainer
            center={position.coordinates}
            zoom={17}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox'
              url={MAPBOX_URL}
            />
            <Marker position={position.coordinates}>
              <StyledPop>
                {" "}
                <h4>{name}</h4>
                <p>{street}</p>
                <p>{zip}</p>
              </StyledPop>
            </Marker>
          </MapContainer> )
        : (
          <MapContainer
            center={defaultCoordinates}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox'
              url={MAPBOX_URL}
            />
          </MapContainer> )}
    </>
  );
};
