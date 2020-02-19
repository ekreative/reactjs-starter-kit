import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMapsMarkContainer from "../GoogleMapsMark/GoogleMapsMarkContainer";
import GoogleMapsAddMarkButtonContainer from "../GoogleMapsAddMarkButton/GoogleMapsAddMarkButtonContainer";
import { GoogleMapElement } from "./GoogleMapsElements"

interface IGoogleMap {
  createMapPoint: (
    lat: number,
    lng: number,
    newPointText: string,
    pointId: string
  ) => {};
  googleMap: any;
}

const GoogleMaps: React.FC<IGoogleMap> = props => {
  return (
    // Important! Always set the container height explicitly
    <GoogleMapElement>
      <GoogleMapsAddMarkButtonContainer x={0} y={0} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
        defaultCenter={{ lat: 49.43047625295346, lng: 32.0584773497735 }}
        defaultZoom={8}
      >
        {props.googleMap.map(
          (element: { lat: number; lng: number; text: string }, id: number) => {
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
    </GoogleMapElement>
  );
};

export default GoogleMaps;
