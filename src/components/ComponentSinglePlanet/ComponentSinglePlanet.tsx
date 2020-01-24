// @ts-ignore
import React, { useState } from "react";
import "./ComponentSinglePlanet.css";
import { IPropsSinglePlanet } from "./ComponentSinglePlanetInterfaces";

export const ComponentSinglePlanet: React.FC<IPropsSinglePlanet> = props => {
  return (
    <div
      onClick={() => {
        props.getsinglePlanetData(props.element.url);
      }}
    >
      {props.element.name}
    </div>
  );
};
