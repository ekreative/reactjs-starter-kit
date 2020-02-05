import React from "react";
import Popup from "reactjs-popup";
import marker from "../../assets/images/marker.png";
import { ImgElement, StyledDiv } from "./GoogleMapsMarkElements";

interface ICard {
  title: string;
  lat: number;
  lng: number;
}

interface IGoogleMapsMark {
  changeGoogleMapMarkText: (pointId: string, value: string) => {};
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
const Card = (props: ICard) => (
  <div className="card">
    <div className="header">Title: {props.title}</div>
    <div className="content">
      <p>lat: {props.lat}</p>
      <p>lng: {props.lng}</p>
    </div>
  </div>
);

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
        <Card
          title={props.element.newPointText}
          lat={props.lat}
          lng={props.lng}
        />
      </Popup>
    </StyledDiv>
  );
};

export default GoogleMapsMark;
