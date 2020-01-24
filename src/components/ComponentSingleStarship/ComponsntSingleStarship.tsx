// @ts-ignore
import React from "react";
import "./ComponsntSingleStarship.css";
import { IPropsSingleStarship } from "./ComponsntSingleStarshipInterfaces";

export const ComponsntSingleStarship: React.FC<IPropsSingleStarship> = props => {
  console.log(props.element);
  return (
    <div className={"SingleStarship"}>
      Starship Name: {props.element.name}
    </div>
  );
};
