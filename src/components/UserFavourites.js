import React from "react";

import {
  UserFavouritesContainer,
} from "../library/UserFavouritesStyles";

export const UserFavourites = ({ favourites }) => {
  // const favouritesArray = JSON.parse(favourites ? favourites : []);

  return (
    <UserFavouritesContainer>
      <h3>Mina favoriter</h3>
      <p>Här kommer du så småning om kunna se dina favoriter.</p>
      {/* {favouritesArray.map((id, index) => (
          <p key={index}>{id}</p>
      ))} */}
    </UserFavouritesContainer>
  );
};
