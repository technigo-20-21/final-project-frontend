import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLocal } from "../reducers/localsFetch";
import { LocalCard } from "../components/LocalCard";
import { Map } from "../components/Map";
import { LottieLoader as Loader } from "../library/LottieLoader";
import {
  SectionContainer,
  SectionHeader,
  SectionTagline,
} from "../library/LocalPageStyles";

export const LocalPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const existingLocal = useSelector((state) =>
    state.locals.localsList.locals.find((local) => local.id === id)
  );
  const singleLocalStatus = useSelector(
    (state) => state.locals.singleLocal.status
  );
  const singleLocalError = useSelector(
    (state) => state.locals.singleLocal.error
  );

  const [loc, setLoc] = useState(existingLocal ? existingLocal : null);

  useEffect(() => {
    if (!existingLocal) {
      dispatch(fetchLocal(id)).then((result) => {
        const newLocal = result.payload;
        setLoc(newLocal);
      });
    }
  }, [id]);

  let content;

  if (singleLocalStatus === "loading") {
    content = <Loader />;
  } else if (singleLocalStatus === "succeeded") {
    content = (
      <>
        <SectionHeader>{loc.name}</SectionHeader>
        <SectionTagline>Din lokala företagare i Torslanda</SectionTagline>
        <LocalCard key={loc.id} {...loc} />
        <Map
          position={loc.geolocation}
          name={loc.name}
          street={loc.street_address}
          zip={loc.zip_code}
        />
      </>
    );
  } else if (singleLocalStatus === "failed") {
    content = <div>{singleLocalError}</div>;
  }
  return <SectionContainer>{content}</SectionContainer>;
};
