import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../../reducers/users";
import { updateFavouritesFetch } from "../../reducers/userFetch";
import { FavouriteHeartButton } from "../../library/category_list_ui/ThumbStyles";
import { FavouriteOutlinedButton } from "../../library/category_list_ui/FavouriteOutlinedButton";
import { FavouriteFilledButton } from "../../library/category_list_ui/FavouriteFilledButton";

export const FavouriteButton = ({ localId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.user.id);
  const accessToken = useSelector((state) => state.users.user.accessToken);
  const userFavourites = useSelector((state) => state.users.favourites);
  const [favourites, setFavourites] = useState(
    userFavourites ? userFavourites : []
  );

  useEffect(() => {
    setFavourites(userFavourites);
  }, [userFavourites]);

  const handleOnClick = () => {
    dispatch(users.actions.updateFavourites(localId));
    let updatedFavourites = [];

    if (favourites.includes(localId)) {
      updatedFavourites = favourites.filter((id) => id !== localId);
    } else {
      updatedFavourites = [...favourites, localId];
    }
    dispatch(updateFavouritesFetch(userId, accessToken, updatedFavourites));
  };

  return (
    <FavouriteHeartButton onClick={handleOnClick}>
      {favourites.includes(localId) ? (
        <FavouriteFilledButton />
      ) : (
        <FavouriteOutlinedButton />
      )}
    </FavouriteHeartButton>
  );
};
