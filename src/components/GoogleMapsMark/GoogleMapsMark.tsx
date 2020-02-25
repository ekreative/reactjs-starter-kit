import React from "react";
import Popup from "reactjs-popup";
import marker from "../../assets/images/marker.png";
import { ImgElement, StyledDiv } from "./GoogleMapsMarkElements";
import GoogleMapsMarkTooltipContainer from "../GoogleMapsMarkTooltip/GoogleMapsMarkTooltipContainer";

interface IGoogleMapsMark {
  changeGoogleMapMarkText: (pointId: string, value: string) => {};
  deleteMapPoint: () => {};
  inFocus: (pointId: string) => {};
  lat: number;
  lng: number;
  element: {
    inFocus: boolean;
    pointId: string;
    newPointText: string;
    lat: number;
  };
}

const GoogleMapsMark: React.FC<IGoogleMapsMark> = props => {
  return (
    <StyledDiv>
      <Popup
        trigger={<ImgElement src={marker} />}
        position="bottom center"
        on="hover"
      >
        <GoogleMapsMarkTooltipContainer
          title={props.element.newPointText}
          lat={props.lat}
          lng={props.lng}
          pointId={props.element.pointId}
          deleteMapPoint={props.deleteMapPoint}
          inFocus={props.inFocus}
        />
      </Popup>
    </StyledDiv>
  );
};

export default GoogleMapsMark;
