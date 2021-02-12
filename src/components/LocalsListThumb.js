import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  ThumbIcon,
  FavouriteHeartButton
} from "../library/ThumbStyles";
import { FavouriteOutlinedButton } from "../library/FavoriteOutlinedButton"
import { FavoriteFilledButton } from "../library/FavouriteFilledButton"
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
          <FavouriteHeartButton onClick={handleOnClick}>
            
            {liked 
              ? <FavoriteFilledButton /> 
              : <FavouriteOutlinedButton />
            }
            
          </FavouriteHeartButton>
        </Container>
      </ThumbImage>
    </LocalLink>
  );
};
