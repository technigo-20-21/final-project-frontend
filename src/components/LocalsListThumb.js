import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  ThumbIcon,
  FavouriteHeart,
} from "../library/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const [liked, setLiked] = useState(false);

  const handleOnClick = () => {
    setLiked(!liked);
  };

  return (
    <LocalLink to={`/local/${_id}`}>
      <ThumbImage url={img_url}>
        <Container>
          <ThumbText>{tagline}</ThumbText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
          <FavouriteHeart
            src={liked ? "../img/heart.png" : "../img/heart-empty.png"}
            onClick={handleOnClick}
          ></FavouriteHeart>
        </Container>
      </ThumbImage>
    </LocalLink>
  );
};
