import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const CustomLinkIconContainer = styled.div`
padding: 6px;
& :hover {
  transform: scaleX(1.2) scaleY(1.2);
  background-color: #175BDA;
  transition: .3s ease-in-out;
}
`;

const CustomLinkIcon = styled.button`
  width: 75px;
  height: 75px;
  background-color: #DEAE15;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 11px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;   
`;

const CustomLinkText = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
`

export const HomePageButton = ({ url }) => {
  return (
    <CustomLinkIconContainer as="a" href={url} target="_blank">
        <CustomLinkIcon>
          <HomeRoundedIcon style={{ fontSize: 32 }} />
               <CustomLinkText></CustomLinkText>
        </CustomLinkIcon>
   
    </CustomLinkIconContainer>
  );
};



