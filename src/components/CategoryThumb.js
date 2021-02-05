import React from "react";
import {
  ImageLink,
  ImageContent,
  CategoryText, 
  CategoryIcon
} from "../library/CategoryThumbStyles";

export const CategoryThumb = ({ display_name, img_url }) => {
  console.log("Hej");
  console.log(img_url);
  return (
      <ImageLink href="#">
        <ImageContent url={img_url}>
          <CategoryText>{display_name}</CategoryText>
          <CategoryIcon className="fas fa-chevron-circle-left"></CategoryIcon>
        </ImageContent>
      </ImageLink>
  );
};
