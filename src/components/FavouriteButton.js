import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../reducers/users";
import { FavouriteHeartButton } from "../library/ThumbStyles";
import { FavouriteOutlinedButton } from "../library/FavouriteOutlinedButton";
import { FavouriteFilledButton } from "../library/FavouriteFilledButton";

export const FavouriteButton = ({ localId }) => {
  const dispatch = useDispatch();
  const userFavourites = useSelector((state) => state.users.favourites);
  const [favourites, setFavourites] = useState(
    userFavourites ? userFavourites : []
  );
  const [isFavourite, setIsFavourite] = useState(favourites ? true : false);
  const favouritesArray = favourites;
 
  useEffect(() => {
    setFavourites(userFavourites);
  }, [userFavourites]);

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
        <FavouriteFilledButton />
      ) : (
        <FavouriteOutlinedButton />
      )}
    </FavouriteHeartButton>
  );
};
