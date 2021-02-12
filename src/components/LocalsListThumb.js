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
<<<<<<< HEAD
  const userFavourites = useSelector((store) => store.users.favourites);
  const [favourites, setFavourites] = useState(userFavourites ? userFavourites : []);
  const [isFavourite, setIsFavourite] = useState(false);
  const favouritesArray = JSON.parse(favourites);

  useEffect(() => {
    // if (favouritesArray.includes(_id)) setIsFavourite(true);
  }, []);
=======
  const userFav = useSelector(store => store.users.favourites)
  // const [user, setUser] = useState(useSelector((store) => store.users.user));
  const [favourites, setFavourites] = useState(userFav ? userFav : []);
  const [isFavourite, setIsFavourite] = useState(false);
  console.log(favourites);
  const favouritesArray = userFav ? JSON.parse(favourites) : [];
    // Does nothing
  // useEffect(() => {
  //   //   setIsFavourite(true)
  // }, []);
>>>>>>> 50f0812c0177ef9bd58aa6240261fc1832afcc92

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
