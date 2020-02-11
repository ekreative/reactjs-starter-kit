import React from "react";
import { Link } from "react-router-dom";
import {ButtonElement} from "./GoogleMapsAddMarkButtonElements"

interface IGoogleMapsAddMarkButton {
  x: number;
  y: number;
}

const GoogleMapsAddMarkButton: React.FC<IGoogleMapsAddMarkButton> = props => {
  return (
    <ButtonElement>
      <Link to="/addGoogleMapMark">AddGoogleMapMark</Link>
    </ButtonElement>
  );
};

export default GoogleMapsAddMarkButton;
