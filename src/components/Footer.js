import React from "react";
import styled from "styled-components/macro";

export const Footer = () => {
  return (
    <FooterContainer>
      <Editor>Hälsningar Evelina &amp; Tobias</Editor>
      <LinkContainer>
        <p>Bulleriberg 2021 | </p>
        <Contact href="https://www.torslandalocals.se/contact">
          &nbsp;Kontakt
        </Contact>
      </LinkContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 25%;
  padding: 20px;
  background: #697181;
  color: white;
  text-align: center;
`;

const Editor = styled.p`
  font-family: "Poiret One", cursive;
  font-size: 24px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const Contact = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
      font-weight: bold;
  }
`;
