import React, {useState} from "react";
import { Link } from "react-router-dom";

import {
  ThumbImage,
  ThumbText,
  ThumbIcon
} from "../library/ThumbStyles";


export const LocalsListThumb = ({ name, tagline, img_url }) => {

  return (
      <Link to={`/locals/${name}`} >
        <ThumbImage url={img_url}>
          <ThumbText>{tagline}</ThumbText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
        </ThumbImage>
      </Link>
  );
}; 