import React from "react";
import {
  ImageContainer,
  Image,
  ImageContent,
  CategoryText, 
  CategoryIcon
} from "../library/CategoryThumbStyles";

export const CategoryThumb = ({ display_name, img_url, url }) => {
  return (
      <ImageContainer href="#">
        <Image src={img_url} />
        <ImageContent >
          <CategoryText>{display_name}</CategoryText>
          <CategoryIcon className="fas fa-chevron-circle-left"></CategoryIcon>
        </ImageContent>
      </ImageContainer>
  );
};
