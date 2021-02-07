import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  ImageLink,
  ImageContent,
  CategoryText, 
  CategoryIcon
} from "../library/CategoryThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url }) => {

  return (
      <Link to={`/locals/${name}`} >
        <ImageContent url={img_url}>
          <CategoryText>{display_name}</CategoryText>
          <CategoryIcon className="fas fa-chevron-circle-left"></CategoryIcon>
        </ImageContent>
      </Link>
  );
};
