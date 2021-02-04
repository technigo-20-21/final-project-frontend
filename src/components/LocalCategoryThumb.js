import React, { useState } from "react";
import { Container, ImageContainer, Image, ImageContent } from "../library/LandingPageStyles";

export const LocalCategoryThumb = ({ categories }) => {
    console.log(categories);
    return (
        <>
    <ImageContainer href="#">
    <Image src="../img/dinner.jpg" />
    <ImageContent>
      <p></p>
      <span className="fas fa-chevron-circle-left"></span>
    </ImageContent>
  </ImageContainer>
  <ImageContainer>
    <Image src="../img/bag.jpg" />
    <ImageContent>
      <p>Shopping</p>
      <span className="fas fa-chevron-circle-left"></span>
    </ImageContent>
  </ImageContainer>
  <ImageContainer>
    <Image src="../img/hair.jpg" />
    <ImageContent>
      <p>Hälsa &amp; skönhet</p>
      <span className="fas fa-chevron-circle-left"></span>
    </ImageContent>
  </ImageContainer>
  </>
  )
}