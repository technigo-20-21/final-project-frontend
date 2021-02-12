import styled from "styled-components";
import { Popup } from "react-leaflet"

export const StyledPop = styled(Popup)`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  border-radius: 0;
  .leaflet-popup-content-wrapper {
    border-radius: 2px;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;