import React from "react";
import styled from "styled-components";
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const CustomLinkIconContainer = styled.div`
padding: 12px;
& :hover {
  transform: scaleX(1.2) scaleY(1.2);
  background-color: #2ecaa3;
  transition: .3s ease-in-out;
}
`;

const CustomLinkIcon = styled.button`
  width: 75px;
  height: 75px;
  background-color: #DEAE15;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4), 0 0 11px rgba(0, 0, 0, 0.4);
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

export const EmailButton = ({ email }) => {
  return (
    <CustomLinkIconContainer as="a" href={`mailto:${email}`}>
        <CustomLinkIcon>
          <MailOutlineRoundedIcon style={{ fontSize: 32 }} />
               <CustomLinkText>Mejla</CustomLinkText>
        </CustomLinkIcon>
   
    </CustomLinkIconContainer>
  );
};

