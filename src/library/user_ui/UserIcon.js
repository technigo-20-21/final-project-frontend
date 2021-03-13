import React from "react";
import styled from "styled-components";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

const CustomLinkIconContainer = styled.div`
  & :hover {
    transform: scaleX(1.2) scaleY(1.2);
    transition: 0.3s ease-in-out;
  }
`;

export const UserIcon = () => {
  return (
    <CustomLinkIconContainer>
      <FaceRoundedIcon style={{ fontSize: 42, color: "#C99E14" }} />
    </CustomLinkIconContainer>
  );
};
