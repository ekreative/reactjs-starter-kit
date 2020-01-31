import React from "react";
import { SingleStarshipElement } from "./SingleStarshipElements";

interface IPropsSingleStarship {
  getOneStarshipData: any;
  swStarshipsPage: number;
  id: number;
  element: {
    name: string;
  };
}

export const SingleStarship: React.FC<IPropsSingleStarship> = props => {
  return (
    <SingleStarshipElement>
      {props.swStarshipsPage * 10 + props.id + 1 - 10}. {props.element.name}
    </SingleStarshipElement>
  );
};
