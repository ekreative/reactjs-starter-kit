import React from "react";
import {} from './GoogleMapsMarkElements'

interface IGoogleMapsMark {
  key: number;
  lat: number;
  lng: number;
  text: string;
}
const GoogleMapsMark: React.FC<IGoogleMapsMark> = (props) => {
  return (<div>{props.text}</div>);
};

export default GoogleMapsMark;
