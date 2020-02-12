import React from "react";
import { ImgElement, StyledDiv } from "./GoogleMapsNewMarkElements";
import marker from "../../assets/images/marker.png";

export const GoogleMapsNewMark = (props: { lat: number, lng: number }) => {
  return (
    <StyledDiv>
      <ImgElement src={marker} />
    </StyledDiv>
  )
};
