import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import { users } from "../reducers/users";
import { updateUserFetch } from "../reducers/userFetch";

import {
  CardContainer,
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  ThumbIcon,
  FavouriteHeart,
} from "../library/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector((store) => store.users.user));

  console.log("user.favourites: " + user.favourites);

  useEffect(() => {
    console.log("Skickar: " + JSON.stringify(user))
    dispatch(updateUserFetch(user));
  }, [user])

  const handleOnClick = () => {
    const isFavourite = user.favourites.includes(_id);
    console.log({isFavourite})
    if (isFavourite) {
      const favouritesList = [user.favourites]
      console.log({favouritesList}, typeof(favourites))
      const removeFromList = favouritesList.filter((item) => item !== _id);
      setUser({ ...user, favourites: removeFromList });
    } else {
      const addToList = [...user.favourites, _id]
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
            user.favourites.includes(_id)
              ? "../img/heart.png"
              : "../img/heart-empty.png"
          }
          onClick={handleOnClick}
        ></FavouriteHeart>
      </Container>
    </CardContainer>
  );
};
