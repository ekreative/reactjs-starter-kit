import React from "react";
import { Link } from "react-router-dom";

interface IGoogleMapsAddMarkButton {
  x: number;
  y: number;
}

const GoogleMapsAddMarkButton: React.FC<IGoogleMapsAddMarkButton> = props => {
  return (
    <Link to="/addGoogleMapMark">AddGoogleMapMark</Link>
  );
};

export default GoogleMapsAddMarkButton;
