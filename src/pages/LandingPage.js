import React from "react";
import styled from "styled-components/macro";

export const LandingPage = () => {
  return (
    <Container>
      <ImageContainer href="#">
        <Image src="../img/dinner.jpg" />
        <ImageContent>
          <p>Äta ute</p>
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
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
`;

// Change color to white, media query doesn't work
const ImageContainer = styled.a`
  text-decoration: none;
  color: black;
  width: 33%;
  text-align: center;

  @media (min-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  width: 100%;

  top: 0;
`;

// Move up
const ImageContent = styled.div`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;
