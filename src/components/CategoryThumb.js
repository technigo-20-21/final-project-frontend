import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ImageLink,
  ThumbImage,
  ThumbText,
  ThumbIcon,
} from "../library/ThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url }) => {
  return (
    <Link to={`/locals/${name}`}>
      <ThumbImage url={img_url}>
        <ThumbText>{display_name}</ThumbText>
        <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
      </ThumbImage>
    </Link>
  );
};
