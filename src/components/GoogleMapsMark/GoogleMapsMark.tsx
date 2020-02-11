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
  const handleSubmit = (e: any) => {
    const value = e.target[0].value;
    props.changeGoogleMapMarkText(props.element.pointId, value);
    props.inFocus(props.element.pointId);
  };

  return props.element.inFocus ? (
    <form onSubmit={handleSubmit} style={{width: "150px"}}>
      <input type="text" placeholder={props.element.newPointText} />
      <button>Ok</button>
    </form>
  ) : (
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
