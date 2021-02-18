import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../reducers/users";
import { FavouriteHeartButton } from "../library/ThumbStyles";
import { FavouriteOutlinedButton } from "../library/FavoriteOutlinedButton";
import { FavoriteFilledButton } from "../library/FavouriteFilledButton";

export const FavouriteButton = ({ localId }) => {
  const dispatch = useDispatch();
  const userFavourites = useSelector((state) => state.users.favourites);
  const [favourites, setFavourites] = useState(
    userFavourites ? userFavourites : []
  );
  const [isFavourite, setIsFavourite] = useState(false);
  console.log(favourites);
  const favouritesArray = favourites;
  // console.log(isFavourite);
  // console.log(favouritesArray);
  // useEffect(() => {
  //   // if (favouritesArray.includes(_id)) setIsFavourite(true);
  // }, []);

  const handleOnClick = () => {
    dispatch(users.actions.updateFavourites(localId));

    if (favouritesArray.includes(localId)) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true);
    }
  };

  return (
    <FavouriteHeartButton onClick={handleOnClick}>
      {favouritesArray.includes(localId) ? (
        <FavoriteFilledButton />
      ) : (
        <FavouriteOutlinedButton />
      )}
    </FavouriteHeartButton>
  );
};
