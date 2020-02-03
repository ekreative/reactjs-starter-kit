import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

interface IProps {
  center: any;
  zoom: any;
}
const GoogleMaps: React.FC<IProps> = props => {
  // let defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "1000px", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
        defaultCenter={{lat: 49.4, lng: 32}}
        defaultZoom={15}
      >
        <AnyReactComponent lat={49.4} lng={32} text="123" />
        <AnyReactComponent lat={49.455555} lng={32.1} text="555" />
        <AnyReactComponent lat={49.455555} lng={32.2} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
