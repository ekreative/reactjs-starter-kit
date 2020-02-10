import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMapsMarkContainer from "../GoogleMapsMark/GoogleMapsMarkContainer";
import GoogleMapsAddMarkButtonContainer from "../GoogleMapsAddMarkButton/GoogleMapsAddMarkButtonContainer";
const uuidv1 = require("uuid/v1");

interface IProps {
  center: any;
  zoom: any;
  createMapPoint: (
    lat: number,
    lng: number,
    newPointText: string,
    pointId: string
  ) => {};
  googleMap: any;
}

interface IMaps {
  x: number;
  y: number;
  lat: number;
  lng: number;
  event: MouseEvent;
}

const GoogleMaps: React.FC<IProps> = props => {
  const handleClick = (event: IMaps) => {
    console.log(event);
    const newPointText = "changeMe";
    const pointId = uuidv1();
    props.createMapPoint(event.lat, event.lng, newPointText, pointId);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "58vh", width: "99vw" }}>
      <GoogleMapsAddMarkButtonContainer x={0} y={0} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
        defaultCenter={{ lat: 49.43047625295346, lng: 32.0584773497735 }}
        defaultZoom={15}
        onClick={handleClick}
      >
        {props.googleMap.map(
          (element: { lat: any; lng: number; text: string }, id: number) => {
            return (
              <GoogleMapsMarkContainer
                key={id}
                lat={element.lat}
                lng={element.lng}
                // @ts-ignore
                element={element}
              />
            );
          }
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
