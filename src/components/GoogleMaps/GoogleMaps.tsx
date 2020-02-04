import React from "react";
import GoogleMapReact from "google-map-react";

const MarkerComponent = ({ text }: any) => <div>{text}</div>;

interface IProps {
  center: any;
  zoom: any;
  createMapPoint: (lat: number, lng: number) => {};
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
    props.createMapPoint(event.lat, event.lng);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
        defaultCenter={{ lat: 49.4, lng: 32 }}
        defaultZoom={15}
        onClick={handleClick}
      >
        {props.googleMap.map(
          (element: { lat: number; lng: number }, id: number) => {
            return (
              <MarkerComponent
                key={id}
                lat={element.lat}
                lng={element.lng}
                text="123"
              />
            );
          }
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
