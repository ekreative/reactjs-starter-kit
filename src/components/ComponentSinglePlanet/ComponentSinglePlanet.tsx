// @ts-ignore
import React from "react";
import "./ComponentSinglePlanet.css";
import { IPropsSinglePlanet } from "./ComponentSinglePlanetInterfaces";

export const ComponentSinglePlanet: React.FC<IPropsSinglePlanet> = props => {
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
