import React from "react";
import { PlanetElement } from "./PlanetElements";
import { Link } from "react-router-dom";

interface IPropsSinglePlanet {
  id: number;
  planetName: string;
  getSinglePlanetData: any;
  element: {
    name: string;
    url: string;
  };
  swPlanetsPage: number;
}

export const Planet: React.FC<IPropsSinglePlanet> = props => {
  return (
    <PlanetElement
      onClick={() => {
        props.getSinglePlanetData(props.element.url);
      }}
    >
      <Link to={`/planet/${props.element.name}`}>
        {props.swPlanetsPage * 10 + props.id + 1 - 10}. {props.element.name}
      </Link>
    </PlanetElement>
  );
};
