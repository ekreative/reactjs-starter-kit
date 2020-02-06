import React from "react";
import { StarshipDataElement } from "./StarshipsDataElements";

interface ISingleStarshipData {
  oneStarshipData: any;
}

export const StarshipData: React.FC<ISingleStarshipData> = props => {
  return (
    <StarshipDataElement>
      {props?.oneStarshipData.name && (
        <p>name: {props?.oneStarshipData.name}</p>
      )}
      {props?.oneStarshipData.model && (
        <p>model: {props?.oneStarshipData.model}</p>
      )}
      {props?.oneStarshipData.manufacturer && (
        <p>manufacturer: {props?.oneStarshipData.manufacturer}</p>
      )}
      {props?.oneStarshipData.starship_class && (
        <p>starship class: {props?.oneStarshipData.starship_class}</p>
      )}
      {props?.oneStarshipData.crew && (
        <p>crew: {props?.oneStarshipData.crew}</p>
      )}
      {props?.oneStarshipData.cargo_capacity && (
        <p>cargo capacity: {props?.oneStarshipData.cargo_capacity}</p>
      )}
    </StarshipDataElement>
  );
};
