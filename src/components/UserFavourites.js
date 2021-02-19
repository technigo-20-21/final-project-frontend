import React from "react";

import {
  UserFavouritesContainer,
} from "../library/UserFavouritesStyles";

export const UserFavourites = ({ favourites }) => {
  // const favouritesArray = JSON.parse(favourites ? favourites : []);

  return (
    <UserFavouritesContainer>
      <h2>Mina favoriter</h2>
      <p>Här kommer du så småning om kunna se dina favoriter.</p>
      {/* {favouritesArray.map((id, index) => (
          <p key={index}>{id}</p>
      ))} */}
    </UserFavouritesContainer>
  );
};
