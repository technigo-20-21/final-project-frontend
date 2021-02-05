import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/locals/${category}`}>
            <CategoryIcon className="fas fa-chevron-circle-left"></CategoryIcon>
          </Link>
        </ImageContent>
      </ImageLink>
  );
};
