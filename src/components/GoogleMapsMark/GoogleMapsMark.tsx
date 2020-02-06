import React from "react";
import Popup from "reactjs-popup";
import marker from "../../assets/images/marker.png";
import { ImgElement, StyledDiv } from "./GoogleMapsMarkElements";
import GoogleMapsMarkContainer from "../GoogleMapsMarkTooltip/GoogleMapsMarkTooltipContainer";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={props.element.newPointText} />
      </form>
    </div>
  ) : (
    <StyledDiv
      onClick={() => {
        props.inFocus(props.element.pointId);
      }}
    >
      <Popup
        trigger={<ImgElement src={marker} />}
        position="bottom center"
        on="hover"
      >
        <GoogleMapsMarkContainer
          title={props.element.newPointText}
          lat={props.lat}
          lng={props.lng}
          pointId={props.element.pointId}
          deleteMapPoint={props.deleteMapPoint}
        />
      </Popup>
    </StyledDiv>
  );
};

export default GoogleMapsMark;
