import React from "react";
import {
  FooterContainer,
  Editor,
  LinkContainer,
  Contact,
} from "../library/FooterStyles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Editor>Hälsningar Evelina &amp; Petra</Editor>
      <LinkContainer>
        <p>Bulleriberg 2021 | </p>
        <Contact href="https://www.torslandalocals.se/contact">
          &nbsp;Kontakt
        </Contact>
      </LinkContainer>
    </FooterContainer>
  );
};
