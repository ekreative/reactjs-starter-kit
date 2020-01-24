import React from "react";
import { IPropsSingleStarship } from "./SingleStarshipInterfaces";
import { SingleStarshipElement } from "./SingleStarshipElements"

export const SingleStarship: React.FC<IPropsSingleStarship> = props => {
  return (
    <SingleStarshipElement>
      Starship Name: {props.element.name}
    </SingleStarshipElement>
  );
};
