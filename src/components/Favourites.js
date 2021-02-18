import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchLocal } from "../reducers/localsFetch";
import { LOCAL_URL } from "../urls";

export const Favourites = ({ favourites }) => {
  const favouritesArray = JSON.parse(favourites ? favourites : []);

  return (
    <>
      <h3>Mina favoriter</h3>
      {favouritesArray.map((id, index) => (
          //do something
          <p key={index}>{id}</p>
      ))}
    </>
  );
};
