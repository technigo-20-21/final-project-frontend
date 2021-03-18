import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MAPBOX_URL } from "../../urls";
import { StyledPop } from "../../library/single_local_ui/MapStyles";

export const Map = () => {
  const local = useSelector((state) => state.locals.singleLocal.local);

  let coordinates;
  let zoom;
  let marker;

  if (local.geolocation.coordinates.length > 0) {
    coordinates = local.geolocation.coordinates;
    zoom = 16;
    marker = true;
  } else {
    coordinates = [57.72096, 11.76561];
    zoom = 13;
    marker = false;
  }

  return (
    <>
      <MapContainer center={coordinates} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox'
          url={MAPBOX_URL}
        />
        {marker ? (
          <Marker position={coordinates}>
            <StyledPop>
              {" "}
              <h4>{local.name}</h4>
              <p>{local.street_address}</p>
              <p>{local.zip_code}</p>
            </StyledPop>
          </Marker>
        ) : null}
      </MapContainer>
    </>
  );
};
