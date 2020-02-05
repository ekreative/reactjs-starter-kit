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
  lat: number;
  lng: number;
  element: {
    pointId: string;
    newPointText: string;
    lat: number;
  };
}
const Card = (props: ICard) => (
  <div className="card">
    <div className="header">{props.title}</div>
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.element.newPointText}
        />
      </form>
      {/*<StyledDiv>*/}
      {/*  <Popup*/}
      {/*    trigger={<ImgElement src={marker} />}*/}
      {/*    position="bottom center"*/}
      {/*    on="hover"*/}
      {/*  >*/}
      {/*    <Card title="Bottom Center" lat={props.lat} lng={props.lng} />*/}
      {/*  </Popup>*/}
      {/*</StyledDiv>*/}
    </div>
  );
};

export default GoogleMapsMark;
