import React from "react";
import Popup from "reactjs-popup";
import { ImgElement, StyledDiv } from "./GoogleMapsNewMarkElements";
import marker from "../../assets/images/marker.png";

export const GoogleMapsNewMark = (props: { text: string, lat: number, lng: number }) => {
  return (
    <StyledDiv>
      <ImgElement src={marker} />
    </StyledDiv>
  )
};
