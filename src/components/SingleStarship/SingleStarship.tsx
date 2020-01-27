import React from "react";
import { SingleStarshipElement } from "./SingleStarshipElements"

interface IPropsSingleStarship {
  element: {
    name: string;
  };
}

export const SingleStarship: React.FC<IPropsSingleStarship> = props => {
  return (
    <SingleStarshipElement>
      Starship Name: {props.element.name}
    </SingleStarshipElement>
  );
};
