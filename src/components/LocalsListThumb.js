import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../reducers/users";
import {
  CardContainer,
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  FavouriteHeartButton,
  MainContainer,
} from "../library/ThumbStyles";
import { FavouriteOutlinedButton } from "../library/FavoriteOutlinedButton";
import { FavoriteFilledButton } from "../library/FavouriteFilledButton";
export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const dispatch = useDispatch();
  const userFavourites = useSelector((store) => store.users.favourites);
  const [favourites, setFavourites] = useState(userFavourites ? userFavourites : []);
  const [isFavourite, setIsFavourite] = useState(false);
  const favouritesArray = JSON.parse(favourites);

  useEffect(() => {
    // if (favouritesArray.includes(_id)) setIsFavourite(true);
  }, []);

  const handleOnClick = () => {
    dispatch(users.actions.updateFavourites(_id));
    if (favouritesArray.includes(_id)) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true)
    }
  };

  return (
    <MainContainer>
      <CardContainer>
        <LocalLink to={`/local/${_id}`}>
          <ThumbImage url={img_url} />
        </LocalLink>
        <Container>
          <ThumbText>{tagline}</ThumbText>
          <FavouriteHeartButton onClick={handleOnClick}>
            {favouritesArray.includes(_id) ? (
              <FavoriteFilledButton />
            ) : (
              <FavouriteOutlinedButton />
            )}
          </FavouriteHeartButton>
        </Container>
      </CardContainer>
    </MainContainer>
  );
};
