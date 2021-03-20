import React from "react";
import { useSelector } from "react-redux";

import { FavouriteButton } from "./FavouriteButton";
import {
  CardContainer,
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  MainContainer,
} from "../../library/category_list_ui/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const accessToken = useSelector((store) => store.users.user.accessToken);

  return (
    <MainContainer>
      <CardContainer>
        <LocalLink to={`/local/${_id}`}>
          <ThumbImage url={img_url} imgSize={"98%"}/>
        </LocalLink>
        <Container>
          <ThumbText>{tagline}</ThumbText>
          {accessToken ? <FavouriteButton localId={_id} /> : null}
        </Container>
      </CardContainer>
    </MainContainer>
  );
};
