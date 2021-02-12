import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import { users } from "../reducers/users";
// import { updateUserFetch } from "../reducers/userFetch";

import {
  CardContainer,
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  FavouriteHeartButton,
  MainContainer
} from "../library/ThumbStyles";
import { FavouriteOutlinedButton } from "../library/FavoriteOutlinedButton";
import { FavoriteFilledButton } from "../library/FavouriteFilledButton";
export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector((store) => store.users.user));
  const [favourites, setFavourites] = useState(
    useSelector((store) => store.users.favourites)
  );
  const [isFavourite, setIsFavourite] = useState(false);

  const favouritesArray = JSON.parse(favourites);

  useEffect(() => {
    //   setIsFavourite(true)
  }, []);

  const handleOnClick = () => {
    dispatch(users.actions.updateFavourites(_id));
    if (favouritesArray.includes(_id)) {
      setIsFavourite();
    } else {
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
          {/* <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon> */}
          <FavouriteHeartButton onClick={handleOnClick}>
            {isFavourite ? (
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
