import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  ThumbLink,
  ThumbImage,
  ThumbText, 
  ThumbIcon
} from "../library/ThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url }) => {

  return (
      <ThumbLink to={`/locals/${name}`} >
        <ThumbImage url={img_url}>
          <ThumbText>{display_name}</ThumbText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
        </ThumbImage>
      </ThumbLink>
  );
};
