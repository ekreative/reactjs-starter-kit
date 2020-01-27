// @ts-ignore
import React from "react";
import { SinglePlanetsElement } from "./SinglePlanetElements";

interface IPropsSinglePlanet {
  planetName: string;
  getSinglePlanetData: any;
  element: {
    name: string;
    url: string;
  };
}

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
