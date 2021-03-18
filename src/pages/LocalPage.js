import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLocal } from "../reducers/localsFetch";
import { LocalCard } from "../components/single_local/LocalCard";
import { Map } from "../components/single_local/Map";
import { LottieLoader as Loader } from "../library/global_ui/LottieLoader";
import {
  SectionContainer,
  SectionHeader,
  SectionTagline,
} from "../library/single_local_ui/LocalPageStyles";

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

  const [loc, setLoc] = useState(existingLocal ? existingLocal : []);

  useEffect(() => {
    if (!existingLocal) {
      dispatch(fetchLocal(id)).then((result) => {
        const newLocal = result.payload;
        setLoc(newLocal);
      });
    }
  }, [id, dispatch, existingLocal]);

  let content;

  if (singleLocalStatus === "loading") {
    content = <Loader />;
  } else if (singleLocalStatus === "succeeded") {
    content = (
      <>
        <SectionHeader>{loc.name}</SectionHeader>
        <SectionTagline>Din lokala företagare i Torslanda</SectionTagline>
        <Map />
        <LocalCard {...loc} />
      </>
    );
  } else if (singleLocalStatus === "failed") {
    content = <div>{singleLocalError}</div>;
  }
  return <SectionContainer>{content}</SectionContainer>;
};
