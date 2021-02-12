import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLocal } from "../reducers/localsFetch";
import { LocalCard } from "../components/LocalCard";
import { SectionContainer, SectionHeader, SectionTagline } from "../library/LocalPageStyles";
import { Map } from "../components/Map";

export const LocalPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const existingLocal = useSelector((state) =>
    state.locals.locals.find((local) => local.id === id)
  );

  const fetchStatus = useSelector((state) => state.locals.status);
  const error = useSelector((state) => state.locals.error);

  const [loc, setLoc] = useState(existingLocal ? existingLocal : []);

  useEffect(() => {
    if (!existingLocal) {
      dispatch(fetchLocal(id)).then((result) => {
        const newLocal = result.payload;
        setLoc(newLocal);
      });
    }
  }, [dispatch, id]);

  return (
    <SectionContainer>
      {loc && (
        <>
          <SectionHeader>{loc.name}</SectionHeader>
          <SectionTagline>Din lokala företagare i Torslanda</SectionTagline>
          <LocalCard key={loc.id} {...loc} />
          <Map position={loc.geolocation} street={loc.street_address} zip={loc.zip_code} />
          </>
      )}
        </SectionContainer>
  );
};
