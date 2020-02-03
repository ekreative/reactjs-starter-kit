import React from "react";
import { SingleStarshipElement } from "./SingleStarshipElements";
import { Link } from "react-router-dom";

interface IPropsSingleStarship {
  getOneStarshipData: any;
  swStarshipsPage: number;
  id: number;
  element: {
    name: string;
    url: string;
  };
}

export const SingleStarship: React.FC<IPropsSingleStarship> = props => {
  return (
    <SingleStarshipElement
      onClick={() => {
        props.getOneStarshipData(props.element.url);
      }}
    >
      <Link to={`/starships/${props.element.name}`}>
        {props.swStarshipsPage * 10 + props.id + 1 - 10}. {props.element.name}
      </Link>
    </SingleStarshipElement>
  );
};
