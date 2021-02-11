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
  const [favourites, setFavourites] = useState(
    useSelector((store) => store.users.user.favourites)
  );
  // const storedFavourites = useSelector((store) => store.users.user.favourites);

  const user = useSelector((store) => store.users.user);

  useEffect(() => {
    // setFavourites(storedFavourites);
    fetch(`http://localhost:8080/${user.id}/favourites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: user.accessToken,
      }
    })
      .then((res) => res.json)
      .then((json) => console.log(json));
  }, []);

  // const favs = useSelector((store) => store.users.user.favourites)
  // const formattedFavourites = favs.split(', ')
  console.log(favourites);

  console.log("first fav:" + favourites);
  console.log(typeof favourites);

  const handleOnClick = () => {
    if (favourites.includes(_id)) {
      console.log("YES");
      const removeFromList = favourites.filter((item) => item !== _id);
      console.log({ removeFromList });
    } else {
      console.log("NO");
      setFavourites(...favourites, _id);
      console.log("new fav:" + favourites);
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
            favourites.includes(_id)
              ? "../img/heart.png"
              : "../img/heart-empty.png"
            // "../img/heart.png"
          }
          onClick={handleOnClick}
          // onChange={(event) => setFavourites({ ...favourites, favourites: event.target.value})}
        ></FavouriteHeart>
      </Container>
    </CardContainer>
  );
};
