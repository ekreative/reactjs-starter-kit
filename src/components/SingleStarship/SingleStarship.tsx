import React from "react";
import { SingleStarshipElement } from "./SingleStarshipElements";
import { Link } from "react-router-dom";

interface IPropsSingleStarship {
  getOneStarshipData: any;
  swStarshipsPage: number;
  id: number;
  element: {
    name: string;
  };
}

export const SingleStarship: React.FC<IPropsSingleStarship> = props => {
  console.log('singleStarship', props);
  return (
    <SingleStarshipElement onClick={props.getOneStarshipData}>
      <Link to={`/starships/${props.id}`}>{props.swStarshipsPage * 10 + props.id + 1 - 10}. {props.element.name}</Link>
    </SingleStarshipElement>
  );
};
