import React, { useState } from "react";
import {
  ImageContainer,
  Image,
  ImageContent,
} from "../library/LandingPageStyles";

export const LocalCategoryThumb = ({ cat }) => {
  console.log(cat);
  return (
      <ImageContainer href="#">
        <Image src={cat.img_url} />
        <ImageContent>
          <p>{cat.display_name}</p>
          <span className="fas fa-chevron-circle-left"></span>
        </ImageContent>
      </ImageContainer>
  );
};
