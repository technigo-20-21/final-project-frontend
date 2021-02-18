import React from "react";
import styled from "styled-components";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const CustomLinkIconContainer = styled.div`

  & :hover {
    transform: scaleX(1.2) scaleY(1.2);
    transition: 0.3s ease-in-out;
  }
`;

export const FavouriteOutlinedButton = () => {
  return (
      <FavoriteBorderRoundedIcon style={{ fontSize: 42, color: '#FF5733' }} />
  );
};
