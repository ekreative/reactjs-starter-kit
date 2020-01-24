// @ts-ignore
import React from "react";
import "./SinglePlanet.css";
import { IPropsSinglePlanet } from "./SinglePlanetInterfaces";

export const SinglePlanet: React.FC<IPropsSinglePlanet> = props => {
  return (
    <div className={'SinglePlanets'}
      onClick={() => {
        props.getsinglePlanetData(props.element.url);
      }}
    >
      Planet name: {props.element.name}
    </div>
  );
};
