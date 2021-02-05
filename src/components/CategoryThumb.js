import React from "react";
import {
  ImageContainer,
  Image,
  ImageContent,
  CategoryText, 
  CategoryIcon
} from "../library/CategoryThumbStyles";

export const CategoryThumb = ({ display_name, img_url }) => {
  return (
      <ImageContainer href="#">
        <ImageContent url={img_url}>
          <CategoryText>{display_name}</CategoryText>
          <CategoryIcon className="fas fa-chevron-circle-left"></CategoryIcon>
        </ImageContent>
      </ImageContainer>
  );
};
