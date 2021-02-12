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
  // ThumbIcon,
  FavouriteHeart,
} from "../library/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector((store) => store.users.user));
  console.log({user})
  console.log("USER-f: " + user.favourites)

  console.log("User id: " + user.id);

  useEffect(() => {
    console.log("Skickar: " + user.favourites);
    // dispatch(updateUserFetch(user));
    // dispatch(users.actions.updateFavourites(user.id));
  }, [dispatch, user]);

  const handleOnClick = () => {
    const isFavourite = user.favourites.includes(_id);
    console.log({ isFavourite });
    if (isFavourite) {
      console.log("Favourite finns, ta bort.");
      const favouritesList = user.favourites;
      console.log({favouritesList})
      const removeFromList = favouritesList.filter((item) => item !== _id);
      setUser({ ...user, favourites: removeFromList });
    } else {
      console.log("Favourite finns inte, lägg till.");
      console.log("user.favourites: " + JSON.stringify(user.favourites));
      const addToList = [...user.favourites, _id];
      console.log("addtoList: " + addToList);
      setUser({ ...user, favourites: addToList });
    }
  };

  return (
    <CardContainer>
      <LocalLink to={`/local/${_id}`}>
        <ThumbImage url={img_url} />
        {/* <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon> */}
      </LocalLink>
      <Container>
        <ThumbText>{tagline}</ThumbText>
        <FavouriteHeart
          src={
            // user.favourites.includes(_id)
            //   ? "../img/heart.png"
            //   : "../img/heart-empty.png"
            "../img/heart.png"
          }
          onClick={handleOnClick}
        ></FavouriteHeart>
      </Container>
    </CardContainer>
  );
};
