// @ts-ignore
import React from "react";
import { IPropsSinglePlanet } from "./SinglePlanetInterfaces";
import { SinglePlanetsElement } from "./SinglePlanetElements";

export const SinglePlanet: React.FC<IPropsSinglePlanet> = props => {
  return (
    <SinglePlanetsElement
      onClick={() => {
        props.getSinglePlanetData(props.element.url);
      }}
    >
      Planet name: {props.element.name}
    </SinglePlanetsElement>
  );
};
